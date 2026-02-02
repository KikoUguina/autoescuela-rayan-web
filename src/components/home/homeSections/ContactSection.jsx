import styles from "./../Home.module.css";

export default function ContactSection() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactEnvelope}>
        <div className={styles.contactHeader}>
          <h2>Contáctanos</h2>
          <span>✉ Mensaje directo</span>
        </div>

        <form
          className={styles.contactForm}
          action="https://formsubmit.co/tuemail@tudominio.com"
          method="POST"
        >
          <input type="hidden" name="_captcha" value="false" />

          <input
            type="text"
            name="name"
            placeholder="Nombre completo"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            required
          />
          <textarea
            name="message"
            placeholder="Escribe tu mensaje"
            rows="5"
            required
          />

          <button type="submit" className={styles.sendButton}>
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
