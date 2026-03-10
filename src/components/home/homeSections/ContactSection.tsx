"use client";

import { useState } from "react";
import s from "./Contact.module.css";
import shared from "@styles/shared.module.css";
import { useReveal } from "@services/reveal";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const PATTERNS = {
  name: /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]{2,60}$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  phone: /^(\+34\s?)?[6-9]\d{8}$/,
};

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "El nombre es obligatorio";
  } else if (!PATTERNS.name.test(data.name.trim())) {
    errors.name = "Solo letras, 2-60 caracteres";
  }

  if (!data.email.trim()) {
    errors.email = "El correo es obligatorio";
  } else if (!PATTERNS.email.test(data.email.trim())) {
    errors.email = "Correo no válido";
  }

  if (!data.phone.trim()) {
    errors.phone = "El teléfono es obligatorio";
  } else if (!PATTERNS.phone.test(data.phone.trim().replace(/\s/g, ""))) {
    errors.phone = "Número español no válido";
  }

  if (!data.message.trim()) {
    errors.message = "El mensaje es obligatorio";
  } else if (data.message.trim().length < 10) {
    errors.message = "Mínimo 10 caracteres";
  }

  return errors;
}

export default function ContactSection() {
  useReveal(shared);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      e.preventDefault();
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
  }

  return (
    <section className={`${s.contactSection} ${shared.reveal}`}>
      <div className={s.contactWrapper}>
        {/* LEFT — INFO */}
        <div className={s.contactInfo}>
          <h2>
            ¿Listo para <span className={shared.glow}>empezar</span>?
          </h2>
          <p className={s.contactSubtitle}>
            Da el primer paso hacia tu carnet de conducir. Rellena el formulario
            y nos pondremos en contacto contigo en menos de 24 horas.
          </p>

          <div className={s.contactDetails}>
            <div className={s.contactDetailItem}>
              <span className={s.detailIcon}>✉</span>
              <div>
                <strong>Email</strong>
                <span>rayanautoescuela@gmail.com</span>
              </div>
            </div>
            <div className={s.contactDetailItem}>
              <span className={s.detailIcon}>📍</span>
              <div>
                <strong>Dirección</strong>
                <span>C. Ministro Fernández Ordóñez, 6, Alcorcón</span>
              </div>
            </div>
            <div className={s.contactDetailItem}>
              <span className={s.detailIcon}>🕐</span>
              <div>
                <strong>Horario</strong>
                <span>L-V: 10:00–13:30 / 17:00–20:30</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — FORM */}
        <div className={s.contactFormCard}>
          <form
            className={s.contactForm}
            action="https://formsubmit.co/rayanautoescuela@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="Nuevo mensaje desde la web" />

            <div className={s.formRow}>
              <div className={s.fieldGroup}>
                <label htmlFor="home-name">Nombre</label>
                <input
                  id="home-name"
                  type="text"
                  name="name"
                  placeholder="Tu nombre completo"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? s.inputError : ""}
                  autoComplete="name"
                />
                {errors.name && <span className={s.errorMsg}>{errors.name}</span>}
              </div>
              <div className={s.fieldGroup}>
                <label htmlFor="home-phone">Teléfono</label>
                <input
                  id="home-phone"
                  type="tel"
                  name="phone"
                  placeholder="612 345 678"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? s.inputError : ""}
                  autoComplete="tel"
                />
                {errors.phone && <span className={s.errorMsg}>{errors.phone}</span>}
              </div>
            </div>

            <div className={s.fieldGroup}>
              <label htmlFor="home-email">Email</label>
              <input
                id="home-email"
                type="email"
                name="email"
                placeholder="tu@correo.com"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? s.inputError : ""}
                autoComplete="email"
              />
              {errors.email && <span className={s.errorMsg}>{errors.email}</span>}
            </div>

            <div className={s.fieldGroup}>
              <label htmlFor="home-message">Mensaje</label>
              <textarea
                id="home-message"
                name="message"
                placeholder="Cuéntanos en qué podemos ayudarte..."
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? s.inputError : ""}
              />
              {errors.message && <span className={s.errorMsg}>{errors.message}</span>}
            </div>

            <button type="submit" className={s.sendButton} disabled={submitted}>
              {submitted ? "Enviando..." : "Enviar mensaje →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
