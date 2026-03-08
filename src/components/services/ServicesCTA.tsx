import Link from "next/link";
import styles from "@app/servicios/Services.module.css";
import shared from "@styles/shared.module.css";
import { useReveal } from "@services/reveal";

export default function ServicesCTA() {
  useReveal(shared);

  return (
    <section className={`${styles.cta} ${shared.reveal}`}>
      <h2>¿Listo para empezar?</h2>
      <br />
      <p>Escríbenos y empieza hoy mismo tu camino hacia el carnet.</p>
      <br />
      <Link href="/contacto">
        <button className={shared.primaryButton}>Contactar</button>
      </Link>
    </section>
  );
}
