import styles from "../Legal.module.css";
import shared from "@styles/shared.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal | Autoescuela Rayán",
  description: "Aviso legal de Autoescuela Rayán en Alcorcón, Madrid.",
};

export default function AvisoLegal() {
  return (
    <main className={styles.page}>
      <div className={shared.gradientWave} />
      <div className={styles.container}>
        <h1>
          Aviso <span className={shared.glow}>Legal</span>
        </h1>

        <h2>1. Datos identificativos</h2>
        <p>
          En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de
          Servicios de la Sociedad de la Información y Comercio Electrónico
          (LSSI-CE), se informa al usuario de los siguientes datos:
        </p>
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
          <li>
            <strong>Actividad:</strong> Autoescuela — formación vial y obtención
            de permisos de conducir
          </li>
        </ul>

        <h2>2. Objeto</h2>
        <p>
          El presente sitio web tiene como finalidad informar sobre los
          servicios ofrecidos por Autoescuela Rayán, así como facilitar la
          comunicación con los usuarios interesados. El acceso al sitio web
          atribuye la condición de usuario e implica la aceptación plena y sin
          reservas de todas las disposiciones incluidas en este Aviso Legal.
        </p>

        <h2>3. Propiedad intelectual e industrial</h2>
        <p>
          Todos los contenidos del sitio web (textos, imágenes, logotipos,
          diseño gráfico, código fuente, etc.) son propiedad del titular o de
          terceros que han autorizado su uso, y están protegidos por la
          legislación vigente en materia de propiedad intelectual e industrial.
        </p>
        <p>
          Queda prohibida su reproducción, distribución, comunicación pública o
          transformación sin la autorización expresa del titular, salvo para uso
          personal y privado.
        </p>

        <h2>4. Responsabilidad</h2>
        <p>
          El titular no se hace responsable de los posibles daños o perjuicios
          derivados de interferencias, omisiones, interrupciones, virus
          informáticos, averías telefónicas o desconexiones en el funcionamiento
          del sistema electrónico, motivadas por causas ajenas al titular.
        </p>
        <p>
          Tampoco se garantiza la ausencia de errores en el acceso al sitio web,
          en su contenido, ni que éste se encuentre actualizado en todo momento,
          aunque se realizarán los mejores esfuerzos para mantenerlo
          debidamente actualizado.
        </p>

        <h2>5. Enlaces de terceros</h2>
        <p>
          El sitio web puede contener enlaces a páginas de terceros. El titular
          no se responsabiliza del contenido ni de las condiciones de uso o
          políticas de privacidad de dichas páginas, siendo responsabilidad del
          usuario la revisión y aceptación de las mismas.
        </p>

        <h2>6. Legislación aplicable y jurisdicción</h2>
        <p>
          La relación entre el titular y el usuario se regirá por la legislación
          española vigente. Para la resolución de cualquier controversia, las
          partes se someterán a los Juzgados y Tribunales de Alcorcón (Madrid),
          salvo que la normativa aplicable disponga otra cosa.
        </p>

        <p className={styles.lastUpdate}>Última actualización: marzo 2026</p>
      </div>
    </main>
  );
}
