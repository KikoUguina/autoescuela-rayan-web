"use client";

import { useState } from "react";
import shared from "@styles/shared.module.css";
import { useReveal } from "@services/reveal";
import type { ServiceItem } from "@shared-types/index";

const services: ServiceItem[] = [
  {
    title: "Test y seguimiento",
    description:
      "Plataforma exclusiva con test personalizados, estadísticas y seguimiento continuo de tu progreso.",
  },
  {
    title: "Clases prácticas",
    description:
      "Vehículos modernos, profesores expertos y un entorno cómodo para aprender de forma segura.",
  },
  {
    title: "Permiso B",
    description:
      "Formación completa: teoría, prácticas reales y preparación total para aprobar a la primera.",
  },
];

export default function ServicesCards() {
  const [flipped, setFlipped] = useState<number | null>(null);
  useReveal(shared);

  return (
    <section className={`${shared.servicesFlip} ${shared.reveal}`}>
      {services.map((service, i) => (
        <div
          key={i}
          className={`${shared.flipCard} ${flipped === i ? shared.flipped : ""}`}
          onClick={() => setFlipped(flipped === i ? null : i)}
        >
          <div className={shared.flipInner}>
            <div className={shared.flipFront}>
              <h3>{service.title}</h3>
              {flipped !== i && (
                <lord-icon
                  src="/svg/tap.json"
                  trigger="loop"
                  style={{ width: 50, height: 50 }}
                />
              )}
            </div>
            <div className={shared.flipBack}>
              <p>{service.description}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
