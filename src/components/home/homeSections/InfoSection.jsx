import { useEffect } from "react";
import styles from "./../Home.module.css";

export default function InfoSection() {
  useEffect(() => {
    const sections = document.querySelectorAll(`.${styles.reveal}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target); // solo una vez
          }
        });
      },
      { threshold: 0.15 },
    );

    sections.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  return (
    <section className={`${styles.info} ${styles.reveal}`}>
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
