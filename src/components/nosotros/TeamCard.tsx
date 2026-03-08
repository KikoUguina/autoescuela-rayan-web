import Image from "next/image";
import Link from "next/link";
import styles from "@app/nosotros/Nosotros.module.css";
import type { TeamMember } from "@shared-types/index";

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <article className={styles.teamCard}>
      <div className={styles.teamImage}>
        <Image
          src={member.image}
          alt={member.name}
          width={400}
          height={320}
          quality={75}
          sizes="(max-width: 480px) 260px, 320px"
        />
      </div>

      <h3>{member.name}</h3>
      <p className={styles.teamRole}>{member.role}</p>

      <Link href={`/nosotros/${member.slug}`} className={styles.teamButton}>
        Leer más
      </Link>
    </article>
  );
}
