import { useState } from "react";
import styles from "./../Home.module.css";

const services = [
  {
    title: "Test y seguimiento",
    description:
      "Acceso a una plataforma exclusiva con test personalizados y seguimiento de tu progreso.",
  },
  {
    title: "Clases prácticas",
    description:
      "Vehículos modernos, profesores expertos y un entorno cómodo para que aprendas rápido y con seguridad.",
  },
  {
    title: "Permiso B",
    description:
      "Formación completa para conducir coche. Teoría personalizada, prácticas reales y preparación total para aprobar a la primera.",
  },
];

export default function ServicesSection() {
  const [flipped, setFlipped] = useState(null);

  return (
    <section className={styles.servicesFlip}>
      {services.map((service, i) => (
        <div
          key={i}
          className={`${styles.flipCard} ${
            flipped === i ? styles.flipped : ""
          }`}
          onClick={() => setFlipped(flipped === i ? null : i)}
        >
          <div className={styles.flipInner}>
            {/* FRONT */}
            <div className={styles.flipFront}>
              <h3>{service.title}</h3>
            </div>

            {/* BACK */}
            <div className={styles.flipBack}>
              <p>{service.description}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
