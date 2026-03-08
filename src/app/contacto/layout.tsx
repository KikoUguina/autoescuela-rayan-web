import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta con Autoescuela Rayán en Alcorcón. Envíanos un mensaje, llámanos o visítanos. Respuesta garantizada en menos de 24 horas.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
