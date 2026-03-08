"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "@app/galeria/Gallery.module.css";
import type { CarGalleryData } from "@services/gallery";

interface CarGalleryProps {
  car: CarGalleryData;
}

export default function CarGallery({ car }: CarGalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className={styles.carSection} id={car.slug}>
      <div className={styles.carHeader}>
        <h2>{car.name}</h2>
        <p>{car.tagline}</p>
      </div>

      <div className={styles.carousel}>
        <div className={styles.viewport} ref={emblaRef}>
          <div className={styles.container}>
            {car.images.map((src, i) => (
              <div className={styles.slide} key={i}>
                <img
                  className={styles.slideImage}
                  src={src}
                  alt={`${car.name} - foto ${i + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.controls}>
          <button
            className={styles.navButton}
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            aria-label="Anterior"
          >
            ‹
          </button>

          <div className={styles.dots}>
            {car.images.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === selectedIndex ? styles.dotActive : ""}`}
                onClick={() => scrollTo(i)}
                aria-label={`Ir a foto ${i + 1}`}
              />
            ))}
          </div>

          <button
            className={styles.navButton}
            onClick={scrollNext}
            disabled={!canScrollNext}
            aria-label="Siguiente"
          >
            ›
          </button>
        </div>
      </div>

      {car.video && (
        <div className={styles.videoSection}>
          <h3>Video interior</h3>
          <div className={styles.videoWrapper}>
            <video
              className={styles.video}
              controls
              preload="metadata"
              playsInline
            >
              <source src={car.video} type="video/mp4" />
              Tu navegador no soporta video HTML5.
            </video>
          </div>
        </div>
      )}

      <div className={styles.divider} />
    </section>
  );
}
