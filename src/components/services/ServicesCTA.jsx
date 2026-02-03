import styles from "@app/servicios/Services.module.css";
import { reveal } from "@services/reveal";
export default function ServicesCTA() {
  reveal(styles);
  return (
    <section className={`${styles.cta} ${styles.reveal}`}>
      <h2>¿Listo para empezar?</h2>
      <br />
      <p>Escríbenos y empieza hoy mismo tu camino hacia el carnet.</p>
      <br />
      <a href="/contacto">
        <button className={styles.primaryButton}>Contactar</button>
      </a>
    </section>
  );
}
