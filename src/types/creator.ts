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
    bio: `Bento Ribeiro é humorista, ator e influenciador brasileiro conhecido por seu estilo autêntico e crítico nas redes sociais. Ex-apresentador de programas marcantes como o Furo MTV, ele agora compartilha no Instagram reflexões ácidas, comentários sobre cultura pop e momentos do seu cotidiano, conectando humor e pensamento crítico dentro do seu canal @ChapadoCrítico.​`,
    topics: ["Humor", "Cultura Pop", "Cotidiano", "Entretenimento"],
    social: {
      instagram: 316000,
      tiktok: 24800,
      youtube: 239000,
    },
    audience: [
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
    bio: `Mab tem foco em música, com menções frequentes a shows, lançamentos e covers. O sentimento predominante é de alegria e entusiasmo, com ela compartilhando momentos do seu dia a dia e interagindo com seus seguidores. Seu público é jovem, principalmente interessado em música, humor e lifestyle. Ela compartilha conteúdo diversificado, que inclui covers, vídeos de humor, sua vida pessoal, e participações em eventos.​`,
    topics: ["Música", "Lifestyle", "Moda", "Arte"],
    social: {
      instagram: 724000,
      tiktok: 3900000000,
      youtube: 3890,
    },
    audience: [
      { range: "18–24", percentage: 39 },
      { range: "25–34", percentage: 42 },
      { range: "35–44", percentage: 11 },
      { range: "45+", percentage: 8 },
    ],
    updatedAt: "Mar/2025",
  },
  {
    name: "Tuitabi",
    handle: "@tuitabi",
    tags: "Games • Pop",
    img: "/influencers/tuitabi.webp",
    location: "Belo Horizonte, MG",
    bio: `Tuitabi surgiu como personagem no The Sims e em suas redes tem um público jovem, que se interessa por games, música, cultura pop e memes. Ela compartilha conteúdos divertidos e descolados, como vlogs, covers musicais, gameplays de The Sims, além de reflexões sobre a vida adulta e dicas de reeducação alimentar, música, cultura pop e eventos. O perfil da Tuitabi se destaca pela autenticidade e espontaneidade, buscando conectar-se com o público através de sua personalidade e experiências.`,
    topics: ["Games", "Cultura Pop", "Tecnologia", "Entretenimento"],
    social: {
      instagram: 50400,
      tiktok: 576700,
      youtube: 60600,
    },
    audience: [
      { range: "18–24", percentage: 40 },
      { range: "25–34", percentage: 45 },
      { range: "35–44", percentage: 8 },
      { range: "45+", percentage: 7 },
    ],
    updatedAt: "Mar/2025",
  },
  {
    name: "Dengoso",
    handle: "@dengoso",
    tags: "Games",
    img: "/influencers/dengoso.webp",
    location: "Curitiba, PR",
    bio: `Gabriel "Dengoso" Lopes reflete a sua trajetória como um dos principais criadores de conteúdo de Fortnite no Brasil e integrante da organização Hero Base. Com uma presença digital marcada pelo carisma e pela proximidade com o seu público, o perfil mistura momentos da sua rotina pessoal, viagens e bastidores da sua carreira como influenciador de gaming. Através de publicações que destacam o seu estilo de vida e a sua ligação com a comunidade de eSports.​`,
    topics: ["Fortnite", "Gaming", "Competitivo", "E-Sports"],
    social: {
      instagram: 226000,
      tiktok: 375000,
      youtube: 3200000,
    },
    audience: [
      { range: "18–24", percentage: 38 },
      { range: "25–34", percentage: 43 },
      { range: "35–44", percentage: 11 },
      { range: "45+", percentage: 8 },
    ],
    updatedAt: "Mar/2025",
  },
  {
    name: "Kalera",
    handle: "@iamkalera",
    tags: "Música • Games",
    img: "/influencers/iamkalera.webp",
    location: "Porto Alegre, RS",
    bio: `Kalera é uma criadora de conteúdo multifacetada, unindo sua paixão por games, música e causas sociais. Ela iniciou sua trajetória como cantora de bandas de rock e covers no YouTube, hoje é streamer na Twitch, especialmente em jogos como Rainbow Six Siege, onde se tornou a primeira brasileira a ter um "charm" personalizado no jogo.​`,
    topics: ["Música", "Rainbow Six", "Streaming", "Games"],
    social: {
      instagram: 152000,
      tiktok: 93500,
      twitch: 245800,
    },
    audience: [
      { range: "18–24", percentage: 38 },
      { range: "25–34", percentage: 47 },
      { range: "35–44", percentage: 6 },
      { range: "45+", percentage: 9 },
    ],
    updatedAt: "Mar/2025",
  },
  {
    name: "Vina Aguiar",
    handle: "@outro_vina",
    tags: "Stand-up • K-pop",
    img: "/influencers/outro_vina.webp",
    location: "São Paulo, SP",
    bio: "Vina Aguiar, identificado como “@outrovina”, é criativo, roteirista e comediante de stand-up, formado em Artes Cênicas pela ECA-USP. Seu conteúdo nas redes e nos palcos combina humor com consciência social, abordando temas como cultura pop e feminismo com leveza e inteligência. Fala sobre universos geeks, mencionando gostos por K-pop e Magic (jogos de cartas), além de sempre mostrar seu conteúdo de humor.​",
    topics: ["Stand-up", "K-pop", "Humor", "Entretenimento"],
    social: {
      instagram: 119000,
      tiktok: 87300,
    },
    audience: [
      { range: "18–24", percentage: 34 },
      { range: "25–34", percentage: 44 },
      { range: "35–44", percentage: 14 },
      { range: "45+", percentage: 8 },
    ],
    updatedAt: "Mar/2025",
  },
  {
    name: "Vick",
    handle: "@v1ck.art",
    tags: "Artes Visuais",
    img: "/influencers/v1ck_art.webp",
    location: "Florianópolis, SC",
    bio: "Vick é uma artista visual de São Paulo que encanta com ilustrações vibrantes e expressivas, explorando temas que vão do cotidiano à fantasia. Com um estilo marcante, ela compartilha seu processo criativo e obras finalizadas nas suas redes. Seu trabalho é uma fusão de técnica apurada e sensibilidade artística, resultando em peças que cativam e inspiram.",
    topics: ["Artes Visuais", "Design", "Ilustração", "Arte Digital"],
    social: {
      instagram: 272000,
      tiktok: 464700,
      youtube: 628000,
    },
    audience: [
      { range: "18–24", percentage: 36 },
      { range: "25–34", percentage: 46 },
      { range: "35–44", percentage: 9 },
      { range: "45+", percentage: 9 },
    ],
    updatedAt: "Mar/2025",
  },
  {
    name: "Julia Campos",
    handle: "@juliampos",
    tags: "Games • Lives",
    img: "/influencers/juliampos.webp",
    location: "São Paulo, SP",
    bio: "Julia também é conhecida como Juliampos, com um conteúdo versátil que se destaca, sua paixão por games esua habilidade em criar conteúdo envolvente a tornaramuma figura querida por seus seguidores. Hoje ela faz partedos conteúdos de lives do Jovem Nerd, trazendo humor,games e cultura pop em lives que duram horas.​",
    topics: ["Games", "Streaming", "Lives", "Entretenimento"],
    social: {
      instagram: 29500,
      tiktok: 287900,
      youtube: 163000,
    },
    audience: [
      { range: "18–24", percentage: 35 },
      { range: "25–34", percentage: 46 },
      { range: "35–44", percentage: 8 },
      { range: "45+", percentage: 11 },
    ],
    updatedAt: "Mar/2025",
  },
  {
    name: "Thatales",
    handle: "@_thatales",
    tags: "Games • Humor",
    img: "/influencers/thatales.webp",
    location: "Recife, PE",
    bio: "Thatales é criador de conteúdo digital, apaixonado por games, especialmente The Sims 4. Conhecido por suas gameplays criativas e cheias de personalidade, ele faz parte do EA Creator Network e traz sempre novidades sobre esse mundo. Com um estilo leve e autêntico, cria uma conexão verdadeira com sua comunidade online fazendo lives diárias na twitch. Seus conteúdos misturam entretenimento e conhecimento de forma única, sempre com bom humor e inteligência.​",
    topics: ["The Sims", "Humor", "Games Casual", "Entretenimento"],
    social: {
      instagram: 14000,
      tiktok: 43300,
      twitch: 6600,
    },
    audience: [
      { range: "18–24", percentage: 39 },
      { range: "25–34", percentage: 42 },
      { range: "35–44", percentage: 11 },
      { range: "45+", percentage: 8 },
    ],
    updatedAt: "Mar/2025",
  },
  {
    name: "Camila Masri",
    handle: "@eucamilamasri",
    tags: "Dublagem • Humor",
    img: "/influencers/eucamilamasri.webp",
    location: "São Paulo, SP",
    bio: "Camila Masri é dubladora e comediante, que mistura um universo leve e criativo junto com lifestyle, autoconhecimento e estilo de vida de forma genuína. Com seus vídeos e reels dinâmicos, ela compartilha momentos do dia a dia com charme, leveza e autenticidade — inspirando quem assiste a viver com propósito, valorizar os detalhes e celebrar a própria jornada. Além disso, sempre usa seu humor para criar conexão com sua comunidade.​",
    topics: ["Dublagem", "Humor", "Personagens", "Entretenimento"],
    social: {
      instagram: 66400,
      tiktok: 30100,
    },
    audience: [
      { range: "18–24", percentage: 29 },
      { range: "25–34", percentage: 43 },
      { range: "35–44", percentage: 19 },
      { range: "45+", percentage: 9 },
    ],
    updatedAt: "Mar/2025",
  },
  {
    name: "Isa Faracco",
    handle: "@isafaracco",
    tags: "Games",
    img: "/influencers/isafaracco.webp",
    location: "Brasília, DF",
    bio: "Isa Faracco é uma criadora de conteúdo e streamer focada em games e entretenimento digital. Com uma presença autêntica e comunicativa, ela se destaca por transformar suas transmissões e vídeos em espaços de conexão genuína com o público. Seus conteúdos combinam humor, espontaneidade e paixão pelo universo gamer, especialmente em jogos como Fortnite. ​",
    topics: ["Fortnite", "Games", "Competitivo", "Lifestyle Gamer"],
    social: {
      instagram: 13000,
      tiktok: 40300,
      twitch: 25700,
    },
    audience: [
      { range: "18–24", percentage: 36 },
      { range: "25–34", percentage: 49 },
      { range: "35–44", percentage: 7 },
      { range: "45+", percentage: 8 },
    ],
    updatedAt: "Mar/2025",
  },
  {
    name: "Murart",
    handle: "@omurart",
    tags: "Música • Geek",
    img: "/influencers/murart.webp",
    location: "São Paulo, SP",
    bio: "Pedro, compositor e cantor da música Acerola e Samba Paixão, com presença marcante na produção musical e muita humildade no seu estilo. Além de compositor, ele grava conteúdos de cultura geek, cosplays e grava conteúdos de casal com sua namorada.​",
    topics: ["Música", "Geek", "Cultura Nerd", "Composição"],
    social: {
      instagram: 110000,
      tiktok: 200300,
    },
    audience: [
      { range: "18–24", percentage: 38 },
      { range: "25–34", percentage: 43 },
      { range: "35–44", percentage: 11 },
      { range: "45+", percentage: 8 },
    ],
    updatedAt: "Mar/2025",
  },
];
