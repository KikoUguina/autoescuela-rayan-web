import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dónde Estamos",
  description:
    "Encuentra Autoescuela Rayán en Alcorcón, Madrid. C. Ministro Fernández Ordóñez, 6. Horario, ubicación en Google Maps y reseñas de nuestros alumnos.",
  alternates: { canonical: "/dondeestamos" },
};

export default function DondeEstamosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
