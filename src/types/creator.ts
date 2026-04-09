// types/creator.ts — adicione ao seu projeto

export interface AudienceAge {
  range: string;
  percentage: number;
}

export interface SocialStats {
  instagram?: number;
  tiktok?: number;
  youtube?: number;
  twitch?: number;
}

export interface Creator {
  name: string;
  handle: string;
  tags: string;
  img: string;
  // Campos novos para o dialog
  location: string;
  bio: string;
  topics: string[];
  social: SocialStats;
  audience: AudienceAge[];
  updatedAt: string; // "Jan/2025"
}

// ─── DADOS ATUALIZADOS — preencha com os dados reais ───────────────────────
export const creators: Creator[] = [
  {
    name: "Bento Ribeiro",
    handle: "@ribeirobentto",
    tags: "Humor • Cultura Pop",
    img: "/influencers/ribeirobentto.webp",
    location: "São Paulo, SP",
    bio: "Criador de conteúdo especializado em humor e referências de cultura pop. Conhecido por sketches virais e comentários ácidos sobre o cotidiano.",
    topics: ["Humor", "Cultura Pop", "Cotidiano", "Entretenimento"],
    social: {
      instagram: 980000,
      tiktok: 2100000,
      youtube: 450000,
    },
    audience: [
      { range: "13–17", percentage: 12 },
      { range: "18–24", percentage: 38 },
      { range: "25–34", percentage: 32 },
      { range: "35–44", percentage: 13 },
      { range: "45+", percentage: 5 },
    ],
    updatedAt: "Mar/2025",
  },
  {
    name: "Mab",
    handle: "@mab_horse",
    tags: "Música • Lifestyle",
    img: "/influencers/mab_horse.webp",
    location: "Rio de Janeiro, RJ",
    bio: "Artista e criadora de conteúdo que une música independente ao lifestyle autêntico. Voz relevante no cenário musical alternativo brasileiro.",
    topics: ["Música", "Lifestyle", "Moda", "Arte"],
    social: {
      instagram: 620000,
      tiktok: 1400000,
      youtube: 210000,
    },
    audience: [
      { range: "13–17", percentage: 8 },
      { range: "18–24", percentage: 42 },
      { range: "25–34", percentage: 35 },
      { range: "35–44", percentage: 11 },
      { range: "45+", percentage: 4 },
    ],
    updatedAt: "Mar/2025",
  },
  {
    name: "Tuitabi",
    handle: "@tuitabi",
    tags: "Games • Pop",
    img: "/influencers/tuitabi.webp",
    location: "Belo Horizonte, MG",
    bio: "Referência em games e cultura pop. Lives engajadas e comunidade fiel que acompanha cada lançamento do universo gamer.",
    topics: ["Games", "Cultura Pop", "Tecnologia", "Entretenimento"],
    social: {
      instagram: 530000,
      tiktok: 890000,
      youtube: 680000,
      twitch: 120000,
    },
    audience: [
      { range: "13–17", percentage: 22 },
      { range: "18–24", percentage: 41 },
      { range: "25–34", percentage: 28 },
      { range: "35–44", percentage: 7 },
      { range: "45+", percentage: 2 },
    ],
    updatedAt: "Mar/2025",
  },
  {
    name: "Dengoso",
    handle: "@dengoso",
    tags: "Gaming • Fortnite",
    img: "/influencers/dengoso.webp",
    location: "Curitiba, PR",
    bio: "Um dos maiores criadores de conteúdo de Fortnite do Brasil. Campeão de torneios e referência para a nova geração de jogadores competitivos.",
    topics: ["Fortnite", "Gaming", "Competitivo", "E-Sports"],
    social: {
      instagram: 410000,
      tiktok: 1700000,
      youtube: 920000,
      twitch: 280000,
    },
    audience: [
      { range: "13–17", percentage: 35 },
      { range: "18–24", percentage: 44 },
      { range: "25–34", percentage: 16 },
      { range: "35–44", percentage: 4 },
      { range: "45+", percentage: 1 },
    ],
    updatedAt: "Mar/2025",
  },
  {
    name: "Kalera",
    handle: "@iamkalera",
    tags: "Música • R6",
    img: "/influencers/iamkalera.webp",
    location: "Porto Alegre, RS",
    bio: "Músico e streamer que combina talento musical com gameplay de alto nível em Rainbow Six. Uma combinação única que conquista públicos distintos.",
    topics: ["Música", "Rainbow Six", "Streaming", "Games"],
    social: {
      instagram: 340000,
      tiktok: 780000,
      youtube: 290000,
      twitch: 95000,
    },
    audience: [
      { range: "13–17", percentage: 18 },
      { range: "18–24", percentage: 46 },
      { range: "25–34", percentage: 28 },
      { range: "35–44", percentage: 6 },
      { range: "45+", percentage: 2 },
    ],
    updatedAt: "Mar/2025",
  },
  {
    name: "Vina Aguiar",
    handle: "@outrovina",
    tags: "Stand-up • K-pop",
    img: "/influencers/outro_vina.webp",
    location: "São Paulo, SP",
    bio: "Comediante e fã de K-pop que mistura stand-up com o universo do entretenimento asiático. Humor inteligente com pitadas de fandom.",
    topics: ["Stand-up", "K-pop", "Humor", "Entretenimento"],
    social: {
      instagram: 720000,
      tiktok: 2400000,
      youtube: 380000,
    },
    audience: [
      { range: "13–17", percentage: 25 },
      { range: "18–24", percentage: 48 },
      { range: "25–34", percentage: 22 },
      { range: "35–44", percentage: 4 },
      { range: "45+", percentage: 1 },
    ],
    updatedAt: "Mar/2025",
  },
  {
    name: "Vick",
    handle: "@v1ck.art",
    tags: "Artes Visuais",
    img: "/influencers/v1ck_art.webp",
    location: "Florianópolis, SC",
    bio: "Artista digital que transforma conceitos criativos em ilustrações marcantes. Referência em design e artes visuais para marcas e criadores.",
    topics: ["Artes Visuais", "Design", "Ilustração", "Arte Digital"],
    social: {
      instagram: 890000,
      tiktok: 1200000,
      youtube: 160000,
    },
    audience: [
      { range: "13–17", percentage: 10 },
      { range: "18–24", percentage: 35 },
      { range: "25–34", percentage: 38 },
      { range: "35–44", percentage: 13 },
      { range: "45+", percentage: 4 },
    ],
    updatedAt: "Mar/2025",
  },
  {
    name: "Julia Campos",
    handle: "@juliampos",
    tags: "Games • Lives",
    img: "/influencers/juliampos.webp",
    location: "São Paulo, SP",
    bio: "Streamer e criadora de conteúdo de games com comunidade extremamente engajada. Lives que combinam gameplay de qualidade com muito entretenimento.",
    topics: ["Games", "Streaming", "Lives", "Entretenimento"],
    social: {
      instagram: 470000,
      tiktok: 960000,
      youtube: 310000,
      twitch: 210000,
    },
    audience: [
      { range: "13–17", percentage: 20 },
      { range: "18–24", percentage: 43 },
      { range: "25–34", percentage: 29 },
      { range: "35–44", percentage: 7 },
      { range: "45+", percentage: 1 },
    ],
    updatedAt: "Mar/2025",
  },
  {
    name: "Thatales",
    handle: "@_thatales",
    tags: "The Sims • Humor",
    img: "/influencers/thatales.webp",
    location: "Recife, PE",
    bio: "A maior referência de The Sims do Brasil. Conteúdo criativo e bem-humorado que transformou um jogo clássico em fenômeno de engajamento.",
    topics: ["The Sims", "Humor", "Games Casual", "Entretenimento"],
    social: {
      instagram: 560000,
      tiktok: 3100000,
      youtube: 740000,
    },
    audience: [
      { range: "13–17", percentage: 28 },
      { range: "18–24", percentage: 45 },
      { range: "25–34", percentage: 21 },
      { range: "35–44", percentage: 5 },
      { range: "45+", percentage: 1 },
    ],
    updatedAt: "Mar/2025",
  },
  {
    name: "Camila Masri",
    handle: "@eucamilamasri",
    tags: "Dublagem • Humor",
    img: "/influencers/eucamilamasri.webp",
    location: "São Paulo, SP",
    bio: "Atriz de dublagem e criadora de conteúdo que viraliza com personagens únicos e humor afiado. Uma voz que todos reconhecem.",
    topics: ["Dublagem", "Humor", "Personagens", "Entretenimento"],
    social: {
      instagram: 830000,
      tiktok: 4200000,
      youtube: 290000,
    },
    audience: [
      { range: "13–17", percentage: 15 },
      { range: "18–24", percentage: 40 },
      { range: "25–34", percentage: 33 },
      { range: "35–44", percentage: 9 },
      { range: "45+", percentage: 3 },
    ],
    updatedAt: "Mar/2025",
  },
  {
    name: "Isa Faracco",
    handle: "@isafaracco",
    tags: "Fortnite • Games",
    img: "/influencers/isafaracco.webp",
    location: "Brasília, DF",
    bio: "Jogadora competitiva e criadora de conteúdo de Fortnite. Representatividade feminina no universo dos games com muito talento e autenticidade.",
    topics: ["Fortnite", "Games", "Competitivo", "Lifestyle Gamer"],
    social: {
      instagram: 380000,
      tiktok: 1500000,
      youtube: 420000,
      twitch: 75000,
    },
    audience: [
      { range: "13–17", percentage: 30 },
      { range: "18–24", percentage: 42 },
      { range: "25–34", percentage: 22 },
      { range: "35–44", percentage: 5 },
      { range: "45+", percentage: 1 },
    ],
    updatedAt: "Mar/2025",
  },
  {
    name: "Murart",
    handle: "@omurart",
    tags: "Música • Geek",
    img: "/influencers/murart.webp",
    location: "São Paulo, SP",
    bio: "Músico e geek de carteirinha que une composição autoral com referências do universo nerd. Um nicho explosivo de engajamento.",
    topics: ["Música", "Geek", "Cultura Nerd", "Composição"],
    social: {
      instagram: 490000,
      tiktok: 1100000,
      youtube: 520000,
    },
    audience: [
      { range: "13–17", percentage: 14 },
      { range: "18–24", percentage: 38 },
      { range: "25–34", percentage: 34 },
      { range: "35–44", percentage: 11 },
      { range: "45+", percentage: 3 },
    ],
    updatedAt: "Mar/2025",
  },
];
