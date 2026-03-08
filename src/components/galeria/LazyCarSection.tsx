"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import styles from "@app/galeria/Gallery.module.css";
import type { CarGalleryData } from "@services/gallery";

interface LazyCarSectionProps {
  car: CarGalleryData;
  loadImmediately?: boolean;
}

export default function LazyCarSection({
  car,
  loadImmediately = false,
}: LazyCarSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(loadImmediately);
  const [CarGallery, setCarGallery] =
    useState<React.ComponentType<{ car: CarGalleryData }> | null>(null);

  const checkVisibility = useCallback(() => {
    const el = ref.current;
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    // Element is considered "in view" when its top is within 200px of viewport bottom
    return rect.top < window.innerHeight + 200;
  }, []);

  useEffect(() => {
    if (loadImmediately) return;

    // Wait for layout to settle before starting observation
    const timeout = setTimeout(() => {
      // Check if already visible after layout
      if (checkVisibility()) {
        setInView(true);
        return;
      }

      const el = ref.current;
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 },
      );

      observer.observe(el);

      // Store observer for cleanup
      observerRef.current = observer;
    }, 300);

    return () => {
      clearTimeout(timeout);
      observerRef.current?.disconnect();
    };
  }, [loadImmediately, checkVisibility]);

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!inView) return;
    import("./CarGallery").then((mod) => setCarGallery(() => mod.default));
  }, [inView]);

  // Si no está en vista, renderizar solo un sentinel invisible
  if (!inView) {
    return <div ref={ref} className={styles.lazySentinel} />;
  }

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
          <div className={styles.placeholder}>
            <div className={styles.placeholderSpinner}>
              <div className={styles.spinner} />
              <span>Cargando galería...</span>
            </div>
          </div>
          <div className={styles.divider} />
        </section>
      )}
    </div>
  );
}
