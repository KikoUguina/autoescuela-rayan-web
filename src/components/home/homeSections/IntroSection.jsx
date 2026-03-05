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
        <span className={styles.glow}>Autoescuela Rayán</span>
      </h1>

      <p className={styles.description}>
        Nuestros vehículos <span className={styles.glow}> GOLF 8 GTI</span>,
        <span className={styles.glow}> GOLF 7 GTD</span>,
        <span className={styles.glow}> POLO GTI</span> y{" "}
        <span className={styles.glow}> BMW 120d xDrive</span> para que tus
        clases sean más cómodas y seguras.
      </p>

      <div className={styles.actions}>
        <a
          href="https://web.archive.org/web/20250711202524/https://sedeclave.dgt.gob.es/WEB_NOTP_CONSULTA/consultaNota.faces"
          target="_blank"
        >
          <button className={styles.primaryButton}>Comprobar nota DGT</button>
        </a>

        <button className={styles.secondaryButton} onClick={scrollToProgram}>
          Más información
        </button>
      </div>
    </section>
  );
}
