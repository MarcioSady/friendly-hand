// Textos fixos do site em português (pt) e inglês (en).
// Cada chave corresponde a um data-i18n="..." no index.html.
const TEXTOS = {
  pt: {
    "nav.sobre": "Quem somos",
    "nav.africa": "Guiné-Bissau",
    "nav.amazonia": "Amazônia",
    "nav.campanhas": "Campanhas",
    "nav.doe": "Doe agora",

    "hero.selo": "Organização Internacional Sem Fins Lucrativos",
    "hero.titulo": "Uma mão amiga para a <span>África</span> e a <span>Amazônia</span>",
    "hero.texto": "Há mais de duas décadas levando esperança, educação, saúde e amor às populações mais necessitadas.",
    "hero.doe": "Quero ajudar",
    "hero.conheca": "Conheça a missão",

    "carta.saudacao": "Querido amigo e amiga,",
    "carta.p1": "Há mais de duas décadas, a Friendly Hand – Mão Amiga tem trabalhado para levar esperança, educação, saúde e amor às populações mais necessitadas da África e da Amazônia.",
    "carta.convite": "Hoje, convidamos você a fazer parte desta missão.",
    "carta.gratidao": "Com gratidão,",
    "carta.cargo": "Presidente – Friendly Hand (Mão Amiga)",

    "num.anos": "anos de missão",
    "num.criancas": "crianças na escola em Guiné-Bissau",
    "num.continentes": "continentes: África e América do Sul",

    "africa.etiqueta": "Guiné-Bissau – África",
    "africa.titulo": "Educação que transforma uma nação",
    "africa.escola.titulo": "Nossa escola",
    "africa.escola.texto": "Mantemos uma escola que atende cerca de 100 crianças, oferecendo gratuitamente:",
    "africa.escola.i1": "Material escolar",
    "africa.escola.i2": "Uniformes",
    "africa.escola.i3": "Merenda escolar",
    "africa.escola.i4": "Apoio educacional e social",
    "africa.clinica.titulo": "Um grande sonho: a Clínica Médica Comunitária",
    "africa.clinica.texto": "Recebemos um terreno em Guiné-Bissau e estamos iniciando a construção de uma Clínica Médica Comunitária, que funcionará como unidade de pronto atendimento para centenas de famílias que hoje têm acesso limitado aos cuidados de saúde.",
    "africa.clinica.tag": "Em construção",

    "amazonia.etiqueta": "Amazônia Brasileira",
    "amazonia.titulo": "O Barco Missionário Mão Amiga 1",
    "amazonia.texto": "Levamos assistência humanitária às comunidades ribeirinhas da região amazônica. Muitas vivem em locais de difícil acesso e dependem da solidariedade de pessoas como você.",
    "amazonia.s1": "Atendimento médico",
    "amazonia.s2": "Atendimento odontológico",
    "amazonia.s3": "Distribuição de medicamentos",
    "amazonia.s4": "Entrega de cestas básicas",
    "amazonia.s5": "Doação de roupas",
    "amazonia.s6": "Assistência espiritual e social",

    "video.etiqueta": "Assista",
    "video.titulo": "Conheça o nosso barco",
    "video.texto": "Veja o Barco Missionário Mão Amiga 1 navegando no Amazonas, as reformas que estamos fazendo e as conquistas que alcançamos juntos, como o consultório odontológico a bordo.",
    "video.botao": "Ajude a missão continuar",

    "ajuda.etiqueta": "Sua ajuda faz a diferença",
    "ajuda.titulo": "Para onde vai a sua doação",
    "ajuda.a1": "Manter a escola das crianças em Guiné-Bissau",
    "ajuda.a2": "Construir a Clínica Médica Comunitária",
    "ajuda.a3": "Levar atendimento médico e odontológico aos ribeirinhos",
    "ajuda.a4": "Fornecer merenda, uniformes e material escolar",
    "ajuda.a5": "Sustentar as viagens missionárias na Amazônia",
    "ajuda.a6": "Distribuir alimentos e medicamentos para famílias necessitadas",
    "ajuda.frase": "Não importa o valor. Cada contribuição se transforma em esperança para alguém.",

    "campanhas.etiqueta": "Campanhas e mensagens",
    "campanhas.titulo": "Acompanhe o que estamos fazendo",
    "campanhas.ver": "Ver arte completa",

    "doe.etiqueta": "Como contribuir",
    "doe.titulo": "Faça parte desta missão",
    "doe.cnpj": "CNPJ",
    "doe.chave": "Chave PIX",
    "doe.copiarPix": "Copiar chave PIX",
    "doe.copiarZelle": "Copiar e-mail Zelle",
    "doe.notaPix": "Para doações no Brasil.",
    "doe.notaZelle": "Para doações dos Estados Unidos.",
    "doe.copiado": "Copiado!",

    "verso.texto": "“Quem se compadece do pobre empresta ao Senhor, que lhe retribuirá o seu benefício.”",
    "verso.ref": "Provérbios 19:17",

    "rodape.slogan": "Levando esperança à África e à Amazônia."
  },

  en: {
    "nav.sobre": "About us",
    "nav.africa": "Guinea-Bissau",
    "nav.amazonia": "Amazon",
    "nav.campanhas": "Campaigns",
    "nav.doe": "Donate now",

    "hero.selo": "International Non-Profit Organization",
    "hero.titulo": "A friendly hand for <span>Africa</span> and the <span>Amazon</span>",
    "hero.texto": "For more than two decades, bringing hope, education, healthcare and love to communities in need.",
    "hero.doe": "I want to help",
    "hero.conheca": "Learn about the mission",

    "carta.saudacao": "Dear friend,",
    "carta.p1": "For more than two decades, Friendly Hand – Mão Amiga has been working to bring hope, education, healthcare, and love to needy communities in Africa and the Amazon.",
    "carta.convite": "Today, we invite you to become part of this mission.",
    "carta.gratidao": "With gratitude,",
    "carta.cargo": "President – Friendly Hand (Mão Amiga)",

    "num.anos": "years of mission",
    "num.criancas": "children in our school in Guinea-Bissau",
    "num.continentes": "continents: Africa and South America",

    "africa.etiqueta": "Guinea-Bissau – Africa",
    "africa.titulo": "Education that transforms a nation",
    "africa.escola.titulo": "Our school",
    "africa.escola.texto": "We maintain a school serving approximately 100 children, providing free:",
    "africa.escola.i1": "School supplies",
    "africa.escola.i2": "School uniforms",
    "africa.escola.i3": "School meals",
    "africa.escola.i4": "Educational and social support",
    "africa.clinica.titulo": "A major dream: the Community Medical Clinic",
    "africa.clinica.texto": "We have received land in Guinea-Bissau and are beginning the construction of a Community Medical Clinic, which will function as an urgent care center serving hundreds of families who currently have limited access to healthcare.",
    "africa.clinica.tag": "Under construction",

    "amazonia.etiqueta": "Brazilian Amazon",
    "amazonia.titulo": "The Mão Amiga 1 Mission Boat",
    "amazonia.texto": "We provide humanitarian assistance to riverside communities throughout the Amazon region. Many of them live in remote areas with difficult access and depend on the generosity of people like you.",
    "amazonia.s1": "Medical care",
    "amazonia.s2": "Dental care",
    "amazonia.s3": "Distribution of medicines",
    "amazonia.s4": "Food basket distribution",
    "amazonia.s5": "Clothing donations",
    "amazonia.s6": "Spiritual and social assistance",

    "video.etiqueta": "Watch",
    "video.titulo": "Meet our boat",
    "video.texto": "See the Mão Amiga 1 Mission Boat sailing the Amazon, the renovations we are making, and the milestones we have reached together, such as the dental office on board.",
    "video.botao": "Help the mission continue",

    "ajuda.etiqueta": "Your help makes a difference",
    "ajuda.titulo": "Where your donation goes",
    "ajuda.a1": "Maintain the school for children in Guinea-Bissau",
    "ajuda.a2": "Build the Community Medical Clinic",
    "ajuda.a3": "Provide medical and dental care to riverside communities",
    "ajuda.a4": "Provide school meals, uniforms, and educational materials",
    "ajuda.a5": "Support missionary trips to the Amazon",
    "ajuda.a6": "Distribute food and medicines to families in need",
    "ajuda.frase": "No matter the amount. Every contribution becomes hope for someone.",

    "campanhas.etiqueta": "Campaigns and messages",
    "campanhas.titulo": "Follow what we are doing",
    "campanhas.ver": "View full artwork",

    "doe.etiqueta": "How to contribute",
    "doe.titulo": "Become part of this mission",
    "doe.cnpj": "CNPJ (Tax ID)",
    "doe.chave": "PIX Key",
    "doe.copiarPix": "Copy PIX key",
    "doe.copiarZelle": "Copy Zelle e-mail",
    "doe.notaPix": "For donations from Brazil.",
    "doe.notaZelle": "For donations from the United States.",
    "doe.copiado": "Copied!",

    "verso.texto": "“Whoever is kind to the poor lends to the Lord, and He will reward them for what they have done.”",
    "verso.ref": "Proverbs 19:17",

    "rodape.slogan": "Bringing hope to Africa and the Amazon."
  }
};
