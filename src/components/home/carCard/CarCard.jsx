import styles from "../Home.module.css";

export default function CarCard({ name, description, type, image, premium }) {
  return (
    <article className={`${styles.carCard} ${premium ? styles.premium : ""}`}>
      <div className={styles.carImage}>
        <img src={image} alt={name} />
      </div>

      <h3>{name}</h3>
      <p>{description}</p>

      <span className={styles.carTag}>{type}</span>
    </article>
  );
}
