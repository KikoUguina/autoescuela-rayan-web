import styles from "./../Home.module.css";

export default function InfoSection() {
  return (
    <section className={styles.info}>
      <div className={styles.infoCard}>
        <h2>Una autoescuela distinta</h2>
        <p>
          No solo vienes a aprobar. Vienes a aprender a conducir con seguridad,
          confianza y un enfoque moderno.
        </p>
      </div>

      <div className={styles.infoCard}>
        <h2 className={styles.rayanPink}>Pensado para el alumno</h2>
        <p>
          Ritmo adaptado, trato cercano y un entorno cuidado para que te
          concentres solo en avanzar.
        </p>
      </div>
    </section>
  );
}
