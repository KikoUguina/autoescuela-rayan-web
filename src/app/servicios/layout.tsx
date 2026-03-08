import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios de Autoescuela Rayán en Alcorcón: permisos B, AM, A1, A2 y A. Clases teóricas y prácticas con vehículos de alta gama y tecnología ADAS.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
