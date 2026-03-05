import { useEffect } from "react";

export function useReveal(styles: { readonly [key: string]: string }): void {
  useEffect(() => {
    const sections = document.querySelectorAll(`.${styles.reveal}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    sections.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [styles]);
}
