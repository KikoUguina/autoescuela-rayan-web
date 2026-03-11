import styles from "@app/servicios/Services.module.css";
import shared from "@styles/shared.module.css";
import { useReveal } from "@services/reveal";

const adasFeatures: string[] = [
  "Start Stop",
  "Ayuda de salida en pendiente",
  "Cámara de marcha atrás",
  "Ayuda al estacionamiento",
  "Activación automática de alumbrado y limpiaparabrisas",
  "Control de estabilidad",
  "Frenado de emergencia urbano e interurbano (AEB)",
  "Sistema avanzado de mantenimiento de carril (LKA)",
  "Asientos deportivos",
  "Cambios de 6 velocidades",
];

export default function ServicesADAS() {
  useReveal(shared);

  return (
    <section className={`${styles.adas} ${shared.reveal}`}>
      <h2>
        Vehículos con <span className={shared.glow}>tecnología avanzada</span>
      </h2>

      <p className={styles.adasIntro}>
        Todos nuestros coches están equipados con sistemas modernos que mejoran
        la seguridad y el confort, siempre cumpliendo la normativa del examen.
      </p>

      <div className={styles.adasGrid}>
        {adasFeatures.map((feature, i) => (
          <div key={i} className={styles.adasItem}>
            {feature}
          </div>
        ))}
      </div>

      <span className={styles.adasNote}>
        * Todos los sistemas ADAS incluidos están permitidos en el examen
        oficial
      </span>
    </section>
  );
}
