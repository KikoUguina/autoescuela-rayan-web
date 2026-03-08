import styles from "../Legal.module.css";
import shared from "@styles/shared.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies | Autoescuela Rayán",
  description: "Política de cookies de Autoescuela Rayán en Alcorcón, Madrid.",
};

export default function PoliticaDeCookies() {
  return (
    <main className={styles.page}>
      <div className={shared.gradientWave} />
      <div className={styles.container}>
        <h1>
          Política de <span className={shared.glow}>Cookies</span>
        </h1>
        <p>
          La presente Política de Cookies tiene como finalidad informar de
          manera clara, transparente y accesible sobre el uso de cookies y
          tecnologías similares en este sitio web, en cumplimiento de la Ley
          34/2002 (LSSI-CE), el Reglamento (UE) 2016/679 (RGPD), la Ley
          Orgánica 3/2018 (LOPDGDD) y la Guía sobre uso de cookies de la AEPD.
        </p>
        <p>
          El usuario podrá configurar las cookies para aceptar o rechazar de
          forma total o parcial su utilización.
        </p>

        <h2>1. Definición y función de las Cookies</h2>
        <p>
          Una cookie es un pequeño archivo creado por un sitio de Internet para
          almacenar información en su equipo, como preferencias de navegación.
          Las cookies permiten personalizar la experiencia y prestar un servicio
          adaptado a las necesidades del usuario.
        </p>

        <h2>2. Tipos de Cookies</h2>

        <h3>Según la entidad que las gestione</h3>
        <ul>
          <li>
            <strong>Cookies propias:</strong> Enviadas al dispositivo del
            usuario desde la propia página web.
          </li>
          <li>
            <strong>Cookies de terceros:</strong> Enviadas desde un dominio no
            gestionado por el titular (ej. Google).
          </li>
        </ul>

        <h3>Según el tiempo que permanecen activas</h3>
        <ul>
          <li>
            <strong>Cookies de sesión:</strong> Se almacenan hasta que finalice
            la sesión de navegación.
          </li>
          <li>
            <strong>Cookies persistentes:</strong> Permanecen activas durante un
            periodo definido por el responsable.
          </li>
        </ul>

        <h3>Según su finalidad</h3>
        <ul>
          <li>
            <strong>Técnicas:</strong> Necesarias para el funcionamiento del
            sitio.
          </li>
          <li>
            <strong>Preferencias:</strong> Adaptan la presentación del sitio al
            usuario.
          </li>
          <li>
            <strong>Analíticas:</strong> Permiten establecer estadísticas de
            uso.
          </li>
          <li>
            <strong>Marketing:</strong> Utilizadas para mostrar publicidad
            dirigida.
          </li>
        </ul>

        <h2>3. Cookies utilizadas en este sitio web</h2>

        <h3>a) Cookies técnicas (no requieren consentimiento)</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Duración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>cookie_consent</td>
              <td>Gestiona si el usuario ha aceptado o rechazado las cookies</td>
              <td>365 días</td>
            </tr>
          </tbody>
        </table>

        <h3>b) Cookies analíticas (requieren consentimiento)</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Servicio</th>
              <th>Descripción</th>
              <th>Duración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>_ga</td>
              <td>Google Analytics</td>
              <td>Analítica de uso: visitantes, páginas vistas, duración</td>
              <td>2 años</td>
            </tr>
            <tr>
              <td>_gid</td>
              <td>Google Analytics</td>
              <td>Almacena valor único para cada página visitada</td>
              <td>1 día</td>
            </tr>
            <tr>
              <td>_gat</td>
              <td>Google Analytics</td>
              <td>Limita la recopilación de datos</td>
              <td>1 minuto</td>
            </tr>
          </tbody>
        </table>

        <h3>c) Cookies de marketing (requieren consentimiento)</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Servicio</th>
              <th>Descripción</th>
              <th>Responsable</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Google Maps</td>
              <td>Mostrar mapas interactivos</td>
              <td>Google LLC</td>
            </tr>
          </tbody>
        </table>

        <h2>4. Revocación y eliminación de Cookies</h2>
        <p>
          El usuario puede configurar su navegador para permitir, bloquear o
          eliminar las cookies. Para más información, consulte la ayuda de su
          navegador:
        </p>
        <ul>
          <li>
            <a
              href="https://support.google.com/chrome/answer/95647"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Chrome
            </a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a
              href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft Edge
            </a>
          </li>
          <li>
            <a
              href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
              target="_blank"
              rel="noopener noreferrer"
            >
              Safari
            </a>
          </li>
        </ul>
        <p>
          De forma general, puede eliminar los datos de navegación pulsando{" "}
          <strong>Ctrl+Mayús+Supr</strong>.
        </p>

        <h2>5. Transferencias internacionales de datos</h2>
        <p>
          Algunos terceros (Google, etc.) pueden realizar transferencias
          internacionales de datos conforme al RGPD, con base en decisiones de
          adecuación o cláusulas contractuales tipo.
        </p>

        <h2>6. Actualización de la política</h2>
        <p>
          La presente política podrá modificarse en cualquier momento en función
          de cambios legislativos o en las cookies utilizadas.
        </p>

        <p className={styles.lastUpdate}>
          Última actualización: septiembre 2025
        </p>
      </div>
    </main>
  );
}
