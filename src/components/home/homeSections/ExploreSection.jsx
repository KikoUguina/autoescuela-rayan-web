import styles from "./../Home.module.css";

export default function ExploreSection() {
  return (
    <section className={styles.explore}>
      <h2 className={styles.sectionTitle}>Descubre más</h2>

      <div className={styles.exploreButtons}>
        <a href="/galeria">
          <button className={styles.primaryButton}>Ver galería</button>
        </a>
        <a href="/dondeestamos">
          <button className={styles.primaryButton}>Dónde estamos</button>
        </a>
      </div>
    </section>
  );
}
