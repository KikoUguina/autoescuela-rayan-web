"use client";

import styles from "@components/home/Home.module.css";
import IntroSection from "@components/home/homeSections/IntroSection";
import InfoSection from "@components/home/homeSections/InfoSection";
import FleetSection from "@components/home/homeSections/FleetSection";

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.gradientWave} />
      <div className={styles.particles} />

      <IntroSection />
      <InfoSection />
      <FleetSection />
    </main>
  );
}
