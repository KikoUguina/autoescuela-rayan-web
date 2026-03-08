import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galería",
  description:
    "Galería de vehículos de Autoescuela Rayán en Alcorcón. Descubre nuestra flota premium: Golf GTI, Polo GTI, Golf GTD y BMW 120d xDrive.",
  alternates: { canonical: "/galeria" },
};

export default function GaleriaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
