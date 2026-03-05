import programStyles from "./Program.module.css";
import shared from "@styles/shared.module.css";
import { useReveal } from "@services/reveal";

export default function ProgramHighlight() {
  useReveal(shared);

  return (
    <section id="program" className={`${programStyles.programWrap} ${shared.reveal}`}>
      <div className={programStyles.programCard}>
        <h2>
          El mejor <span className={shared.glow}>programa teórico</span>, solo
          para ti
        </h2>

        <p className={programStyles.programLead}>
          El mejor programa de teórico personalizado para ti en exclusiva.
        </p>

        <p>
          Las clases teóricas se imparten con un{" "}
          <strong>programa multimedia</strong> diseñado para hacerlas más amenas
          y de mejor entendimiento.
        </p>

        <p>
          Accedes además al <strong>mejor programa de test del mercado</strong>,
          totalmente <strong>personalizado</strong> para ti.
        </p>

        <p className={programStyles.programGuarantee}>
          Y estamos tan seguros de ello que{" "}
          <span>si no apruebas, te devolvemos el dinero</span>.
        </p>
        <a href="https://cloud.aeolservice.es/" target="_blank" rel="noreferrer">
          <button className={shared.primaryButton}>Hacer tests online</button>
        </a>
      </div>
    </section>
  );
}
