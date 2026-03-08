import { team } from "@services/team";
import TeamCard from "@components/nosotros/TeamCard";
import styles from "@app/nosotros/Nosotros.module.css";
import shared from "@styles/shared.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce al equipo de Autoescuela Rayán en Alcorcón. Profesores con experiencia, trato cercano y pasión por la enseñanza vial.",
  alternates: { canonical: "/nosotros" },
};

export default function NosotrosSection() {
  return (
    <main className={styles.page}>
      <div className={shared.gradientWave} />

      {/* HERO */}
      <section className={styles.hero}>
        <h1>
          Conoce al <span className={shared.glow}>equipo</span>
        </h1>
        <p>
          Detrás de cada alumno que aprueba hay un equipo comprometido.
          Profesores con experiencia, trato cercano y una pasión real por
          la enseñanza. Aquí no eres un número, eres parte de la familia.
        </p>
      </section>

      {/* TEAM GRID */}
      <section className={styles.teamSection}>
        <div className={styles.teamGrid}>
          {team.map((person) => (
            <TeamCard key={person.slug} member={person} />
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className={styles.valuesSection}>
        <h2>
          Por qué <span className={shared.glow}>elegirnos</span>
        </h2>

        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <span className={styles.valueIcon}>🎯</span>
            <h3>Enseñanza personalizada</h3>
            <p>
              Nos adaptamos al ritmo de cada alumno. No hay dos personas
              iguales, y nuestras clases tampoco lo son.
            </p>
          </div>

          <div className={styles.valueCard}>
            <span className={styles.valueIcon}>🚗</span>
            <h3>Flota premium</h3>
            <p>
              Aprende con vehículos de alta gama: Golf GTI, Polo GTI, Golf GTD
              y BMW 120d xDrive.
            </p>
          </div>

          <div className={styles.valueCard}>
            <span className={styles.valueIcon}>🤝</span>
            <h3>Trato familiar</h3>
            <p>
              Somos una autoescuela cercana donde te sentirás acompañado
              desde el primer día hasta que consigas tu carnet.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
