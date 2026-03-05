"use client";

import { useRef, useState, useEffect } from "react";
import styles from "@app/galeria/Gallery.module.css";
import type { CarGalleryData } from "@services/gallery";

interface LazyCarSectionProps {
  car: CarGalleryData;
}

export default function LazyCarSection({ car }: LazyCarSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [CarGallery, setCarGallery] = useState<React.ComponentType<{ car: CarGalleryData }> | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    import("./CarGallery").then((mod) => setCarGallery(() => mod.default));
  }, [visible]);

  return (
    <div ref={ref}>
      {CarGallery ? (
        <CarGallery car={car} />
      ) : (
        <section className={styles.carSection}>
          <div className={styles.carHeader}>
            <h2>{car.name}</h2>
            <p>{car.tagline}</p>
          </div>
          <div className={styles.placeholder} />
          <div className={styles.divider} />
        </section>
      )}
    </div>
  );
}
