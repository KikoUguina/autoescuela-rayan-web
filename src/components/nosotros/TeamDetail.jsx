import styles from "@app/nosotros/Nosotros.module.css";
import stylesHome from "@components/home/Home.module.css";
export default function TeamDetail({ person, onBack }) {
  return (
    <section className={styles.teamDetail}>
      <button className={stylesHome.primaryButton} onClick={onBack}>
        ← Nosotros
      </button>

      <div className={styles.detailLayout}>
        <div className={styles.detailImage}>
          <img src={person.image} alt={person.name} />
        </div>

        <div className={styles.teamDetailText}>
          <h1>{person.name}</h1>
          <br />
          <h3 className={stylesHome.glow}>{person.role}</h3>
          <br />
          <p>{person.text}</p>
          <br />
        </div>
      </div>
    </section>
  );
}
