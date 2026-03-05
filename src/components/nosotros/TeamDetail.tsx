import styles from "@app/nosotros/Nosotros.module.css";
import shared from "@styles/shared.module.css";
import type { TeamMember } from "@shared-types/index";

interface TeamDetailProps {
  person: TeamMember;
  onBack: () => void;
}

export default function TeamDetail({ person, onBack }: TeamDetailProps) {
  return (
    <section className={styles.teamDetail}>
      <button className={shared.primaryButton} onClick={onBack}>
        ← Nosotros
      </button>

      <div className={styles.detailLayout}>
        <div className={styles.detailImage}>
          <img src={person.image} alt={person.name} />
        </div>

        <div className={styles.teamDetailText}>
          <h1>{person.name}</h1>
          <br />
          <h3 className={shared.glow}>{person.role}</h3>
          <br />
          <p>{person.text}</p>
        </div>
      </div>
    </section>
  );
}
