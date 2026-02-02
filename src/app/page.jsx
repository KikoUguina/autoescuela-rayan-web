"use client";

import { useEffect } from "react";
import styles from "./Home.module.css";

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll(`.${styles.reveal}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.15 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main className={styles.page}>
      <div className={styles.gradientWave} />
      <div className={styles.particles} />

      <section className={styles.hero}>
        <h1 className={styles.title}>
          Aprende a conducir con{" "}
          <span className={styles.glow}>otra experiencia</span>
        </h1>

        <p className={styles.description}>
          Formación moderna, entorno premium y una autoescuela que cuida cada
          detalle desde el primer día.
        </p>

        <div className={styles.actions}>
          <button className={styles.primaryButton}>Inscribirme</button>
          <button className={styles.secondaryButton}>Más información</button>
        </div>
      </section>

      <section className={`${styles.info} ${styles.reveal}`}>
        <div className={styles.infoCard}>
          <h2>Una autoescuela distinta</h2>
          <p>
            No solo vienes a aprobar. Vienes a aprender a conducir con
            seguridad, confianza y un enfoque moderno.
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
      <section className={`${styles.fleet} ${styles.reveal}`}>
        <h2 className={styles.fleetTitle}>
          Nuestros <span className={styles.rayanPink}>coches</span>
        </h2>

        <div className={styles.fleetGrid}>
          <div className={styles.carCard}>
            <h3>Volkswagen Golf GTI</h3>
            <p>
              Potencia, control y respuesta inmediata. Ideal para aprender con
              precisión.
            </p>
            <span className={styles.carTag}>Manual</span>
          </div>

          <div className={styles.carCard}>
            <h3>Volkswagen Polo GTI</h3>
            <p>Ágil y compacto, perfecto para dominar ciudad y maniobras.</p>
            <span className={styles.carTag}>Manual</span>
          </div>

          <div className={styles.carCard}>
            <h3>Volkswagen Golf GTD</h3>
            <p>
              Equilibrio entre eficiencia y potencia para una conducción real.
            </p>
            <span className={styles.carTag}>Manual</span>
          </div>

          <div className={styles.carCard}>
            <h3>BMW 120d xDrive</h3>
            <p>
              Tracción total y cambio automático para una experiencia premium.
            </p>
            <span className={styles.carTag}>Automático</span>
          </div>
        </div>
      </section>
    </main>
  );
}
