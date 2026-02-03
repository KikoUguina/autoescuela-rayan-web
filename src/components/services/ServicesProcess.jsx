import styles from "@app/servicios/Services.module.css";
import { reveal } from "@services/reveal";
const steps = [
  {
    number: "01",
    title: "Teoría",
    text: "Aprende a tu ritmo con apoyo constante.",
  },
  {
    number: "02",
    title: "Prácticas",
    text: "Conduce en condiciones reales y progresivas.",
  },
  { number: "03", title: "Examen", text: "Llegas preparado y con confianza." },
];

export default function ServicesProcess() {
  reveal(styles);
  return (
    <section className={`${styles.process} ${styles.reveal}`}>
      <h2>Cómo funciona</h2>

      <div className={styles.steps}>
        {steps.map((step, i) => (
          <div key={i} className={styles.stepCard}>
            <span>{step.number}</span>
            <h2>{step.title}</h2>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
