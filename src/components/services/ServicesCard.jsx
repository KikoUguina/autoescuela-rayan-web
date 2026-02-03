"use client";

import { useState } from "react";
import styles from "@app/servicios/Services.module.css";
import { reveal } from "@services/reveal";

const services = [
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
  const [flipped, setFlipped] = useState(null);
  reveal(styles);

  return (
    <section className={`${styles.servicesFlip} ${styles.reveal}`}>
      {services.map((service, i) => (
        <div
          id="icon"
          key={i}
          className={`${styles.flipCard} ${
            flipped === i ? styles.flipped : ""
          }`}
          onClick={() => setFlipped(flipped === i ? null : i)}
        >
          <div className={styles.flipInner}>
            <div className={styles.flipFront}>
              <h3>{service.title}</h3>
              <lord-icon
                src="/svg/tap.json"
                trigger="loop"
                target="#icon"
                style={{ width: 50, height: 50 }}
              />
            </div>

            <div className={styles.flipBack}>
              <p>{service.description}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
