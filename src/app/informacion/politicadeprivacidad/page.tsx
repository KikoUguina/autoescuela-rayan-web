import styles from "../Legal.module.css";
import shared from "@styles/shared.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | Autoescuela Rayán",
  description:
    "Política de privacidad de Autoescuela Rayán en Alcorcón, Madrid.",
};

export default function PoliticaDePrivacidad() {
  return (
    <main className={styles.page}>
      <div className={shared.gradientWave} />
      <div className={styles.container}>
        <h1>
          Política de <span className={shared.glow}>Privacidad</span>
        </h1>
        <p>
          En ANTONIO RAYAN RODRIGUEZ estamos especialmente concienciados por la
          confidencialidad de los datos de carácter personal que se nos facilitan
          a través de la página web. Mediante esta política informamos al
          usuario sobre la protección de datos y los derechos que le asisten.
        </p>
        <p>
          En virtud del Reglamento General de Protección de Datos de la Unión
          Europea (RGPD), Reglamento UE 2016/679, y el principio de
          transparencia, ponemos a su disposición la siguiente información
          sobre el tratamiento de datos personales.
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
            <strong>Correo:</strong> info@autoescuelaalcorcon.com
          </li>
        </ul>

        <h2>Obtención de los datos</h2>
        <p>Los datos personales se obtienen a través de:</p>
        <ul>
          <li>
            Formularios web, correo electrónico, teléfono o contrato,
            facilitados voluntariamente por el titular.
          </li>
          <li>
            Fuentes accesibles al público y/o registros públicos, siempre que
            exista interés legítimo.
          </li>
        </ul>

        <h2>Finalidad del tratamiento</h2>
        <p>
          Los datos serán tratados para responder a las peticiones realizadas a
          través del sitio web. Si otorga consentimiento, podrá recibir
          comunicaciones comerciales que podrá revocar en cualquier momento.
        </p>
        <p>
          Los datos también se tratan para la gestión comercial, administrativa,
          contable y fiscal conforme a la normativa vigente.
        </p>

        <h2>Conservación de los datos</h2>
        <p>
          Los datos se conservarán mientras se mantenga la relación con la
          entidad y no se solicite su supresión, conforme a los plazos legales.
          Los datos de suscripciones a comunicaciones comerciales se conservarán
          hasta que se tramite la baja.
        </p>

        <h2>Legitimación</h2>
        <ul>
          <li>Solicitud de información por parte del interesado.</li>
          <li>
            Consentimiento expreso para comunicaciones comerciales.
          </li>
          <li>Formalización de relación comercial.</li>
          <li>Ejecución de un contrato.</li>
        </ul>

        <h2>Destinatarios</h2>
        <p>
          No se cederán datos a terceros salvo obligación legal. Cuando se
          cuente con servicios de terceros para tratamientos administrativos, se
          formalizará el contrato de encargado de tratamiento para garantizar la
          seguridad y confidencialidad de los datos.
        </p>

        <h2>Derechos del interesado</h2>
        <p>El usuario puede ejercer de forma libre y gratuita:</p>
        <ul>
          <li>Derecho de acceso</li>
          <li>Derecho de rectificación</li>
          <li>Derecho de supresión</li>
          <li>Derecho de limitación del tratamiento</li>
          <li>Derecho de oposición</li>
          <li>Derecho a la portabilidad</li>
          <li>Derecho a retirar el consentimiento</li>
        </ul>
        <p>
          Contacto:{" "}
          <a href="mailto:info@autoescuelaalcorcon.com">
            info@autoescuelaalcorcon.com
          </a>
        </p>

        <h2>Autoridad de Control</h2>
        <p>
          La autoridad de control en España es la{" "}
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
