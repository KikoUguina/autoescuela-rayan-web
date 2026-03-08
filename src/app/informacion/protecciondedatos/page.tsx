import styles from "../Legal.module.css";
import shared from "@styles/shared.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Protección de Datos | Autoescuela Rayán",
  description:
    "Política de protección de datos personales de Autoescuela Rayán.",
};

export default function ProteccionDeDatos() {
  return (
    <main className={styles.page}>
      <div className={shared.gradientWave} />
      <div className={styles.container}>
        <h1>
          Protección de <span className={shared.glow}>Datos</span>
        </h1>
        <p>
          Información sobre el tratamiento de datos personales en cumplimiento
          del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018
          (LOPDGDD).
        </p>

        <h2>Responsable del tratamiento</h2>
        <ul>
          <li>
            <strong>Titular:</strong> ANTONIO RAYAN RODRIGUEZ
          </li>
          <li>
            <strong>NIF:</strong> 05391942Y
          </li>
          <li>
            <strong>Domicilio:</strong> Calle Ministro Fernández Ordóñez, 6,
            28924 Alcorcón, Madrid
          </li>
          <li>
            <strong>Correo electrónico:</strong> info@autoescuelaalcorcon.com
          </li>
        </ul>
        <p>
          No se dispone de delegado de protección de datos (DPO). Para cualquier
          consulta, puede contactarnos por los medios indicados.
        </p>

        <h2>Obtención de los datos</h2>
        <p>
          Los datos personales son obtenidos a través de formularios web, correo
          electrónico, teléfono o contrato, facilitados voluntariamente por el
          titular, o bien a partir de fuentes accesibles al público cuando exista
          interés legítimo.
        </p>

        <h2>Finalidad del tratamiento</h2>
        <p>
          Los datos serán tratados para responder a las peticiones realizadas a
          través de este sitio web y, previo consentimiento, para el envío de
          comunicaciones comerciales. También se usarán para la gestión
          comercial, administrativa, contable y fiscal conforme a la normativa
          vigente.
        </p>

        <h2>Conservación de los datos</h2>
        <p>
          Los datos se conservarán mientras se mantenga la relación con la
          entidad y no se solicite su supresión, conforme a los plazos legales
          establecidos. Los datos de suscripciones a comunicaciones comerciales
          permanecerán hasta que el interesado tramite su baja.
        </p>

        <h2>Legitimación</h2>
        <ul>
          <li>Solicitud de información por parte del interesado.</li>
          <li>
            Consentimiento expreso para recibir comunicaciones comerciales.
          </li>
          <li>
            Formalización de relación comercial o ejecución de un contrato.
          </li>
        </ul>

        <h2>Destinatarios</h2>
        <p>
          No se cederán datos a terceros salvo obligación legal. En caso de
          contar con servicios de terceros para tratamientos administrativos, se
          formalizará el contrato de encargado de tratamiento correspondiente.
        </p>

        <h2>Derechos del interesado</h2>
        <p>El usuario puede ejercer los siguientes derechos:</p>
        <ul>
          <li>Derecho de acceso a sus datos personales</li>
          <li>Derecho de rectificación</li>
          <li>Derecho de supresión</li>
          <li>Derecho de limitación del tratamiento</li>
          <li>Derecho de oposición</li>
          <li>Derecho a la portabilidad</li>
          <li>Derecho a retirar el consentimiento</li>
        </ul>
        <p>
          Para ejercer estos derechos, puede contactarnos en{" "}
          <a href="mailto:info@autoescuelaalcorcon.com">
            info@autoescuelaalcorcon.com
          </a>
          .
        </p>

        <h2>Autoridad de Control</h2>
        <p>
          Si considera que sus derechos no han sido debidamente atendidos, puede
          presentar una reclamación ante la{" "}
          <strong>Agencia Española de Protección de Datos (AEPD)</strong>:
        </p>
        <ul>
          <li>C/ Jorge Juan, 6 — 28001 Madrid</li>
          <li>Teléfono: 901 100 099 — 912 663 517</li>
          <li>
            Web:{" "}
            <a
              href="https://www.aepd.es"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.aepd.es
            </a>
          </li>
        </ul>

        <p className={styles.lastUpdate}>Última actualización: marzo 2026</p>
      </div>
    </main>
  );
}
