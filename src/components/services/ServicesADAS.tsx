import styles from "@app/servicios/Services.module.css";
import shared from "@styles/shared.module.css";
import { useReveal } from "@services/reveal";

const adasFeatures: string[] = [
  "Control de estabilidad",
  "Asistencia en frenada",
  "Climatizador bizona",
  "Control de consumo",
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
