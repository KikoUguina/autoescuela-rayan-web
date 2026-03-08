"use client";

import styles from "@components/home/Home.module.css";
import IntroSection from "@components/home/homeSections/IntroSection";
import ProgramHighlight from "@components/home/homeSections/ProgramHighlight";
import InfoSection from "@components/home/homeSections/InfoSection";
import FleetSection from "@components/home/homeSections/FleetSection";
import ContactSection from "@components/home/homeSections/ContactSection";
import ServicesSection from "@components/home/homeSections/ServicesSection";
import ExploreSection from "@components/home/homeSections/ExploreSection";
import shared from "@styles/shared.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={shared.gradientWave} />

      <IntroSection />
      <ProgramHighlight />
      <InfoSection />
      <FleetSection />
      <ServicesSection />
      <ExploreSection />
      <ContactSection />
    </main>
  );
}
