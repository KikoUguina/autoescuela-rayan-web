"use client";

import { useState } from "react";
import { team } from "@services/team";
import TeamCard from "@components/nosotros/TeamCard";
import TeamDetail from "@components/nosotros/TeamDetail";
import styles from "@app/nosotros/Nosotros.module.css";
import shared from "@styles/shared.module.css";
import type { TeamMember } from "@shared-types/index";

export default function NosotrosSection() {
  const [selectedPerson, setSelectedPerson] = useState<TeamMember | null>(null);

  if (selectedPerson) {
    return (
      <TeamDetail
        person={selectedPerson}
        onBack={() => setSelectedPerson(null)}
      />
    );
  }

  return (
    <section className={styles.teamSection}>
      <h1 className={styles.title}>
        Conoce al <span className={shared.glow}>equipo</span>
      </h1>

      <div className={styles.teamGrid}>
        {team.map((person) => (
          <TeamCard
            key={person.slug}
            member={person}
            onSelect={setSelectedPerson}
          />
        ))}
      </div>
    </section>
  );
}
