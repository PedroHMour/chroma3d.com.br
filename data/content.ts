export const produtos = [
  {
    id: 1,
    nome: "Chromatech Tupã A1",
    descricaoCurta: "Impressora 3D multicolorida com a única tecnologia de mistura de cores do mundo.",
    historia: "A Tupã A1 foi desenvolvida para atender às demandas da indústria 4.0 na Amazônia, oferecendo uma plataforma robusta e confiável para engenheiros e designers. Com um chassi de metal reforçado e componentes de alta qualidade, ela garante repetibilidade e precisão em todas as impressões.",
    preco: 16900.00,
    urlImagemPrincipal: "/images/Tupana-A1.png", // Confirmei a extensão .png aqui
    especificacoes: [
      "Volume de Impressão: 300x300x400mm",
      "Tecnologia: Mistura de Cores (Multicolorida)", // Alterado de CMYK
      "Nivelamento Automático",
      "Extrusora Direct Drive"
    ],
    categoria: "Impressora"
  }
];

export const equipe = [
  {
    id: 1,
    name: 'Giselle Lima',
    title: 'CEO',
    imageUrl: '/images/team/giselle.jpeg', // Atenção à extensão .jpeg
  },
  {
    id: 2,
    name: 'Pedro Henrique',
    title: 'Desenvolvedor de Software',
    imageUrl: '/images/team/pedro.jpg',
  },
  {
    id: 3,
    name: 'Andrey',
    title: 'Cadista',
    imageUrl: '/images/team/andrey.jpg', // Verifica se tens esta imagem
  },
  {
    id: 4,
    name: 'Dharlan',
    title: 'COO',
    imageUrl: '/images/team/dharlan.jpg',
  },
  {
    id: 5,
    name: 'Tony',
    title: 'CTO',
    imageUrl: '/images/team/tony.jpeg',
  },
];