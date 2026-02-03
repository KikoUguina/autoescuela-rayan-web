import styles from "@app/servicios/Services.module.css";
import { reveal } from "@services/reveal";
const adasFeatures = [
  "Control de estabilidad",
  "Asistencia en frenada",
  "Climatizador bizona",
  "Control de consumo",
  "Asientos deportivos",
  "Cambios de 6 velocidades",
];

export default function ServicesADAS() {
  reveal(styles);
  return (
    <section className={`${styles.adas} ${styles.reveal}`}>
      <h2>
        Vehículos con <span className={styles.glow}>tecnología avanzada</span>
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
