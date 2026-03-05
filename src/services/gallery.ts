export interface CarGalleryData {
  name: string;
  slug: string;
  tagline: string;
  images: string[];
  video: string | null;
}

export const galleryData: CarGalleryData[] = [
  {
    name: "Volkswagen Golf GTI",
    slug: "golf-gti",
    tagline: "Potencia, control y respuesta inmediata.",
    images: [
      "/galeria/golf_gti_3-4.webp",
      "/galeria/golf_gti_front.webp",
      "/galeria/golf_gti_side.webp",
      "/galeria/golf_gti_trasera_3-4.webp",
      "/galeria/gti_1-4_izq.webp",
      "/galeria/gti_asientos.JPG",
      "/galeria/gti_volante.webp",
      "/galeria/puerta_golf_gti.webp",
    ],
    video: "/galeria/interior_gti_good.mp4",
  },
  {
    name: "Volkswagen Golf GTD",
    slug: "golf-gtd",
    tagline: "Equilibrio entre eficiencia y potencia.",
    images: [
      "/galeria/gtd_3-4.webp",
      "/galeria/gtd_1-4.webp",
      "/galeria/gtd_trasera.webp",
      "/galeria/lado_gtd.webp",
      "/galeria/gtd_puerta.webp",
      "/galeria/gtd_interior.webp",
      "/galeria/gtd_interior_door.webp",
      "/galeria/golf_gtd_interior.webp",
    ],
    video: null,
  },
  {
    name: "Volkswagen Polo GTI",
    slug: "polo-gti",
    tagline: "Ágil y compacto, perfecto para ciudad.",
    images: [
      "/galeria/polo_gti_3-4.webp",
      "/galeria/polo_gti_1-4.webp",
      "/galeria/polo_gti_front.webp",
      "/galeria/polo_gti_back.webp",
      "/galeria/polo_gti_door.webp",
      "/galeria/polo_gti_interior.webp",
      "/galeria/puerta_polo_gti.webp",
    ],
    video: "/galeria/polo_gti_interior_video.mp4",
  },
  {
    name: "BMW 120d xDrive",
    slug: "bmw-120d",
    tagline: "Tracción total y cambio automático.",
    images: [
      "/galeria/120d_3-4.webp",
      "/galeria/120d_1-4.webp",
      "/galeria/120d_front.webp",
      "/galeria/120d_side.webp",
      "/galeria/120d_back.webp",
      "/galeria/120d_door.webp",
      "/galeria/120d_interior.webp",
      "/galeria/120d_asiento.webp",
    ],
    video: "/galeria/interior_120d_video.mp4",
  },
];
