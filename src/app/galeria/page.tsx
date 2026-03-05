"use client";

import styles from "./Gallery.module.css";
import shared from "@styles/shared.module.css";
import LazyCarSection from "@components/galeria/LazyCarSection";
import { galleryData } from "@services/gallery";

export default function Galeria() {
  return (
    <main className={styles.page}>
      <div className={shared.gradientWave} />

      <section className={styles.hero}>
        <h1>
          Nuestra <span className={shared.glow}>galería</span>
        </h1>
        <p>
          Descubre en detalle cada uno de nuestros vehículos. Exterior,
          interior y en movimiento.
        </p>
      </section>

      {galleryData.map((car) => (
        <LazyCarSection key={car.slug} car={car} />
      ))}
    </main>
  );
}
