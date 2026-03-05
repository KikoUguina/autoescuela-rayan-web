import contactStyles from "./Contact.module.css";
import shared from "@styles/shared.module.css";
import { useReveal } from "@services/reveal";

export default function ContactSection() {
  useReveal(shared);

  return (
    <section className={`${contactStyles.contactSection} ${shared.reveal}`}>
      <div className={contactStyles.contactEnvelope}>
        <div className={contactStyles.contactHeader}>
          <h2>Contáctanos</h2>
          <span>✉ Mensaje directo</span>
        </div>

        <form
          className={contactStyles.contactForm}
          action="https://formsubmit.co/rayanautoescuela@gmail.com"
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
            rows={5}
            required
          />

          <button type="submit" className={contactStyles.sendButton}>
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
