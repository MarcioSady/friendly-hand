(function () {
  const IDIOMAS = ["pt", "en"];
  let idioma = "pt";

  function idiomaInicial() {
    try {
      const salvo = localStorage.getItem("idioma");
      if (IDIOMAS.includes(salvo)) return salvo;
    } catch (e) {}
    return (navigator.language || "pt").toLowerCase().startsWith("pt") ? "pt" : "en";
  }

  // Aceita texto simples ou objeto { pt, en }
  function traduzir(valor) {
    if (valor == null) return "";
    if (typeof valor === "string") return valor;
    return valor[idioma] || valor.pt || "";
  }

  function renderizarCampanhas() {
    const lista = document.getElementById("lista-campanhas");
    lista.innerHTML = "";
    CONTEUDOS.forEach(function (c) {
      const art = document.createElement("article");
      art.className = "campanha";

      const imgBtn = document.createElement("button");
      imgBtn.type = "button";
      imgBtn.className = "campanha__img";
      imgBtn.setAttribute("aria-label", TEXTOS[idioma]["campanhas.ver"]);
      const img = document.createElement("img");
      img.src = traduzir(c.imagem);
      img.alt = traduzir(c.titulo);
      img.loading = "lazy";
      imgBtn.appendChild(img);
      imgBtn.addEventListener("click", function () { abrirLightbox(img.src, img.alt); });
      art.appendChild(imgBtn);

      const corpo = document.createElement("div");
      corpo.className = "campanha__corpo";
      if (c.data) corpo.insertAdjacentHTML("beforeend", '<p class="campanha__data"></p>');
      if (c.destaque) corpo.insertAdjacentHTML("beforeend", '<span class="campanha__destaque"></span>');
      corpo.insertAdjacentHTML("beforeend", "<h3></h3><p class='campanha__texto'></p>");
      if (c.data) corpo.querySelector(".campanha__data").textContent = traduzir(c.data);
      if (c.destaque) corpo.querySelector(".campanha__destaque").textContent = traduzir(c.destaque);
      corpo.querySelector("h3").textContent = traduzir(c.titulo);
      corpo.querySelector(".campanha__texto").textContent = traduzir(c.texto);

      if (c.botao) {
        const a = document.createElement("a");
        a.className = "btn btn--ouro";
        a.href = c.botao.link || "#doe";
        a.textContent = traduzir(c.botao);
        corpo.appendChild(a);
      }
      art.appendChild(corpo);
      lista.appendChild(art);
    });
  }

  function aplicarIdioma(novo) {
    idioma = novo;
    try { localStorage.setItem("idioma", novo); } catch (e) {}
    document.documentElement.lang = novo === "pt" ? "pt-BR" : "en";
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const t = TEXTOS[novo][el.dataset.i18n];
      if (t != null) el.innerHTML = t;
    });
    document.querySelectorAll(".idioma button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.lang === novo));
    });
    renderizarCampanhas();
  }

  // Lightbox
  const lightbox = document.getElementById("lightbox");
  function abrirLightbox(src, alt) {
    const img = lightbox.querySelector("img");
    img.src = src;
    img.alt = alt;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  }
  function fecharLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = "";
  }
  lightbox.addEventListener("click", function (e) {
    if (e.target !== lightbox.querySelector("img")) fecharLightbox();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !lightbox.hidden) fecharLightbox();
  });

  // Copiar chave PIX / Zelle
  const aviso = document.getElementById("aviso");
  let avisoTimer;
  function mostrarAviso(msg) {
    aviso.textContent = msg;
    aviso.classList.add("visivel");
    clearTimeout(avisoTimer);
    avisoTimer = setTimeout(function () { aviso.classList.remove("visivel"); }, 2200);
  }
  document.querySelectorAll(".copiar").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const valor = btn.dataset.copiar;
      const ok = function () { mostrarAviso(TEXTOS[idioma]["doe.copiado"] + " " + valor); };
      if (navigator.clipboard) {
        navigator.clipboard.writeText(valor).then(ok, function () { mostrarAviso(valor); });
      } else {
        mostrarAviso(valor);
      }
    });
  });

  // Menu no celular
  const menu = document.getElementById("menu");
  const toggle = document.querySelector(".menu-toggle");
  toggle.addEventListener("click", function () {
    const aberto = menu.classList.toggle("aberto");
    toggle.setAttribute("aria-expanded", String(aberto));
  });
  menu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      menu.classList.remove("aberto");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  document.querySelectorAll(".idioma button").forEach(function (b) {
    b.addEventListener("click", function () { aplicarIdioma(b.dataset.lang); });
  });

  document.getElementById("ano").textContent = new Date().getFullYear();
  aplicarIdioma(idiomaInicial());
})();
