export interface Review {
  author: string;
  rating: number;
  text: string;
  timeAgo: string;
  initials: string;
  avatarColor: string;
}

export const overallRating = 4.9;
export const totalReviews = 127;

export const reviews: Review[] = [
  {
    author: "María García",
    rating: 5,
    text: "Increíble experiencia. Los profesores son muy profesionales y pacientes. Me saqué el carnet en tiempo récord gracias a ellos. Los coches son modernos y están en perfecto estado. 100% recomendable!",
    timeAgo: "hace 2 semanas",
    initials: "MG",
    avatarColor: "#4285F4",
  },
  {
    author: "Carlos López",
    rating: 5,
    text: "La mejor autoescuela de Alcorcón sin duda. Antonio es un crack como profesor, te explica todo con mucha claridad y te hace sentir seguro al volante desde el primer día.",
    timeAgo: "hace 1 mes",
    initials: "CL",
    avatarColor: "#EA4335",
  },
  {
    author: "Laura Martínez",
    rating: 5,
    text: "Muy contenta con la atención recibida. Las clases teóricas online son muy cómodas y las prácticas con los GTI son una pasada. El trato es cercano y familiar.",
    timeAgo: "hace 1 mes",
    initials: "LM",
    avatarColor: "#34A853",
  },
  {
    author: "Alejandro Ruiz",
    rating: 5,
    text: "Aprobé a la primera tanto teórica como práctica. Los profesores se adaptan a tu ritmo y te preparan muy bien. Los vehículos son de alta gama, lo cual se agradece mucho.",
    timeAgo: "hace 2 meses",
    initials: "AR",
    avatarColor: "#FBBC05",
  },
  {
    author: "Sofía Hernández",
    rating: 5,
    text: "Recomiendo esta autoescuela al 100%. Cristina es una profesora excepcional, muy atenta y con mucha paciencia. El ambiente es muy bueno y los coches una maravilla.",
    timeAgo: "hace 3 meses",
    initials: "SH",
    avatarColor: "#4285F4",
  },
  {
    author: "Daniel Torres",
    rating: 5,
    text: "De las mejores decisiones que he tomado. El método de enseñanza es muy efectivo y personalizado. Además, practicar con coches como el Golf GTI hace que aprender sea mucho más divertido.",
    timeAgo: "hace 3 meses",
    initials: "DT",
    avatarColor: "#EA4335",
  },
];
