import Link from "next/link";
import exploreStyles from "./Explore.module.css";
import shared from "@styles/shared.module.css";
import { useReveal } from "@services/reveal";

export default function ExploreSection() {
  useReveal(shared);

  return (
    <section className={`${exploreStyles.explore} ${shared.reveal}`}>
      <h2 className={exploreStyles.sectionTitle}>Descubre más</h2>

      <div className={exploreStyles.exploreButtons}>
        <Link href="/galeria">
          <button className={shared.primaryButton}>Ver galería</button>
        </Link>
        <Link href="/dondeestamos">
          <button className={shared.primaryButton}>Dónde estamos</button>
        </Link>
      </div>
    </section>
  );
}
