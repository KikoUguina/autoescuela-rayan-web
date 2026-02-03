import styles from "./contactData.module.css";
import Swal from "sweetalert2";

export default function LegalPages() {
  const copyInClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Texto copiado al portapapeles:",
          text: text,
        });
      })
      .catch((err) => {
        console.error("Error al copiar al portapapeles:", err);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un error al copiar al portapapeles.",
        });
      });
  };

  return (
    <div id={styles.contact_data}>
      <h4 className="elaGreen">Datos de Contacto</h4>
      <div>
        <img src="/svg/mail.svg" alt="" />
        <a href="mailto:rayanautoescuela@gmail.com">
          rayanautoescuela@gmail.com
        </a>
      </div>

      <div>
        <img src="/svg/insta.svg" alt="" />
        <a href="https://www.instagram.com/autoescuelarayan/">
          @autoescuelarayan
        </a>
      </div>

      <div>
        <img src="/svg/facebook.svg" alt="" />
        <a href="https://www.facebook.com/autoescuela.rayan">
          /autoescuela.rayan/
        </a>
      </div>

      <div>
        <img src="/svg/phone.svg" alt="" />
        <a onClick={() => copyInClipboard(91603858590)}>91 603 85 85 90</a>
      </div>
    </div>
  );
}
