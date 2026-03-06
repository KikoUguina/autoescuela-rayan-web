"use client";

import Link from "next/link";
import styles from "@app/nosotros/Nosotros.module.css";
import shared from "@styles/shared.module.css";
import type { TeamMember } from "@shared-types/index";

interface TeamDetailProps {
  person: TeamMember;
}

export default function TeamDetail({ person }: TeamDetailProps) {
  return (
    <section className={styles.teamDetail}>
      {/* BREADCRUMBS */}
      <nav className={styles.breadcrumbs}>
        <Link href="/nosotros" className={styles.breadcrumbLink}>
          Nosotros
        </Link>
        <span className={styles.breadcrumbSep}>‹</span>
        <span className={styles.breadcrumbCurrent}>{person.name}</span>
      </nav>

      <div className={styles.detailLayout}>
        <div className={styles.detailImage}>
          <img
            src={person.image}
            alt={person.name}
            style={{ viewTransitionName: `team-${person.slug}` }}
          />
        </div>

        <div className={styles.teamDetailText}>
          <h1>{person.name}</h1>
          <h3 className={shared.glow}>{person.role}</h3>
          <p>{person.text}</p>
        </div>
      </div>
    </section>
  );
}
