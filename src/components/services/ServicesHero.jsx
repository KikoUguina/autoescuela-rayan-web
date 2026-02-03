import styles from "@app/servicios/Services.module.css";

export default function ServicesHero() {
  return (
    <section className={styles.hero}>
      <h1>
        Nuestros <span className={styles.glow}>servicios</span>
      </h1>
      <p>
        Todo lo que necesitas para aprender a conducir con seguridad, confianza
        y una experiencia cuidada al detalle.
      </p>
    </section>
  );
}
