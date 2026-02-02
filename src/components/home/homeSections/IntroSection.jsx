import styles from "./../Home.module.css";

export default function IntroSection() {
  const scrollToProgram = () => {
    const section = document.getElementById("program");
    section?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>
        Aprende a conducir con{" "}
        <span className={styles.glow}>otra experiencia.</span>
      </h1>

      <p className={styles.description}>
        Nuestros vehículos <span className={styles.glow}> GOLF 8 GTI</span>,
        <span className={styles.glow}> GOLF 7 GTD</span>,
        <span className={styles.glow}> POLO GTI</span> y{" "}
        <span className={styles.glow}> BMW 120d xDrive</span> para que tus
        clases sean más cómodas y seguras.
      </p>

      <div className={styles.actions}>
        <a href="https://cloud.aeolservice.es/" target="_blank">
          <button className={styles.primaryButton}>Hacer tests online</button>
        </a>

        <button className={styles.secondaryButton} onClick={scrollToProgram}>
          Más información
        </button>
      </div>
    </section>
  );
}
