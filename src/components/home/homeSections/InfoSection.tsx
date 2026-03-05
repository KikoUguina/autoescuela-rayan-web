import infoStyles from "./Info.module.css";
import shared from "@styles/shared.module.css";
import { useReveal } from "@services/reveal";

export default function InfoSection() {
  useReveal(shared);

  return (
    <section className={`${infoStyles.info} ${shared.reveal}`}>
      <div className={infoStyles.infoCard}>
        <h2>Una autoescuela distinta</h2>
        <p>
          No solo vienes a aprobar. Vienes a aprender a conducir con seguridad,
          confianza y un enfoque moderno.
        </p>
      </div>
      <div className={infoStyles.infoCard}>
        <h2 className={infoStyles.rayanPink}>Pensado para el alumno</h2>
        <p>
          Ritmo adaptado, trato cercano y un entorno cuidado para que te
          concentres solo en avanzar.
        </p>
      </div>
    </section>
  );
}
