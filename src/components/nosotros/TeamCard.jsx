import styles from "@app/nosotros/Nosotros.module.css";

export default function TeamCard({ member, onSelect }) {
  return (
    <article className={styles.teamCard}>
      <div className={styles.teamImage}>
        <img src={member.image} alt={member.name} />
      </div>

      <h3>{member.name}</h3>
      <p className={styles.teamRole}>{member.role}</p>

      <button className={styles.teamButton} onClick={() => onSelect(member)}>
        Leer más
      </button>
    </article>
  );
}
