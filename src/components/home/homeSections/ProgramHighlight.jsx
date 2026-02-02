import { useEffect } from "react";
import styles from "./../Home.module.css";

export default function ProgramHighlight() {
  useEffect(() => {
    const sections = document.querySelectorAll(`.${styles.reveal}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="program" className={`${styles.programWrap} ${styles.reveal}`}>
      <div className={styles.programCard}>
        <h2>
          El mejor <span className={styles.glow}>programa teórico</span> , solo
          para ti
        </h2>

        <p className={styles.programLead}>
          El mejor programa de teórico personalizado para ti en exclusiva.
        </p>

        <p>
          Las clases teóricas se imparten con un{" "}
          <strong>programa multimedia</strong> diseñado para hacerlas más amenas
          y de mejor entendimiento.
        </p>

        <p>
          Accedes además al <strong>mejor programa de test del mercado</strong>,
          totalmente <strong>personalizado</strong> para ti.
        </p>

        <p className={styles.programGuarantee}>
          Y estamos tan seguros de ello que{" "}
          <span>si no apruebas, te devolvemos el dinero</span>.
        </p>
      </div>
    </section>
  );
}
