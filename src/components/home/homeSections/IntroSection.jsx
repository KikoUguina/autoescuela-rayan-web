import styles from "./../Home.module.css";

export default function IntroSection() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>
        Aprende a conducir con{" "}
        <span className={styles.glow}>otra experiencia</span>
      </h1>

      <p className={styles.description}>
        Formación moderna, entorno agradable y una autoescuela que cuida cada
        detalle desde el primer día.
      </p>

      <div className={styles.actions}>
        <button className={styles.primaryButton}>Inscribirme</button>
        <button className={styles.secondaryButton}>Más información</button>
      </div>
    </section>
  );
}
