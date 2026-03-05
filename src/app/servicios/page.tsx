"use client";

import styles from "./Services.module.css";
import shared from "@styles/shared.module.css";
import ServicesHero from "@components/services/ServicesHero";
import ServicesCard from "@components/services/ServicesCard";
import ServicesADAS from "@components/services/ServicesADAS";
import ServicesProcess from "@components/services/ServicesProcess";
import ServicesCTA from "@components/services/ServicesCTA";

export default function Servicios() {
  return (
    <main className={styles.page}>
      <div className={shared.gradientWave} />

      <ServicesHero />
      <ServicesCard />
      <ServicesADAS />
      <ServicesProcess />
      <ServicesCTA />
    </main>
  );
}
