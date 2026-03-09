"use client";

import styles from "./contactData.module.css";

export default function ContactData() {
  const copyToClipboard = async (text: string) => {
    const Swal = (await import("sweetalert2")).default;
    try {
      await navigator.clipboard.writeText(text);
      Swal.fire({
        icon: "success",
        title: "Texto copiado al portapapeles:",
        text: text,
      });
    } catch (err) {
      console.error("Error al copiar al portapapeles:", err);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un error al copiar al portapapeles.",
      });
    }
  };

  return (
    <div id={styles.contact_data}>
      <h4>Datos de Contacto</h4>
      <div>
        <img src="/svg/mail.svg" alt="" />
        <a href="mailto:rayanautoescuela@gmail.com">
          rayanautoescuela@gmail.com
        </a>
      </div>

      <div>
        <img src="/svg/insta.svg" alt="" />
        <a href="https://www.instagram.com/autoescuelarayan/" target="_blank" rel="noreferrer">
          @autoescuelarayan
        </a>
      </div>

      <div>
        <img src="/svg/facebook.svg" alt="" />
        <a href="https://www.facebook.com/autoescuela.rayan" target="_blank" rel="noreferrer">
          /autoescuela.rayan/
        </a>
      </div>

      <div>
        <img src="/svg/phone.svg" alt="" />
        <a onClick={() => copyToClipboard("916038585")} style={{ cursor: "pointer" }}>
          91 611 99 44
        </a>
      </div>
    </div>
  );
}
