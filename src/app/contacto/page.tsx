"use client";

import { useState } from "react";
import styles from "./Contacto.module.css";
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
    errors.name = "Introduce un nombre válido (solo letras, 2-60 caracteres)";
  }

  if (!data.email.trim()) {
    errors.email = "El correo es obligatorio";
  } else if (!PATTERNS.email.test(data.email.trim())) {
    errors.email = "Introduce un correo electrónico válido";
  }

  if (!data.phone.trim()) {
    errors.phone = "El teléfono es obligatorio";
  } else if (!PATTERNS.phone.test(data.phone.trim().replace(/\s/g, ""))) {
    errors.phone = "Introduce un número de teléfono español válido";
  }

  if (!data.message.trim()) {
    errors.message = "El mensaje es obligatorio";
  } else if (data.message.trim().length < 10) {
    errors.message = "El mensaje debe tener al menos 10 caracteres";
  }

  return errors;
}

export default function Contacto() {
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
    <main className={styles.page}>
      <div className={shared.gradientWave} />

      {/* HERO */}
      <section className={styles.hero}>
        <h1>
          Ponte en <span className={shared.glow}>contacto</span>
        </h1>
        <p>
          ¿Tienes alguna duda o quieres empezar tu formación? Escríbenos y te
          responderemos lo antes posible.
        </p>
      </section>

      {/* MAIN CONTENT */}
      <section className={`${styles.contactLayout} ${shared.reveal}`}>
        {/* LEFT — FORM */}
        <div className={styles.formCard}>
          <div className={styles.formHeader}>
            <h2>Envíanos un mensaje</h2>
            <p>Todos los campos son obligatorios</p>
          </div>

          <form
            className={styles.form}
            action="https://formsubmit.co/rayanautoescuela@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="Nuevo mensaje desde la web" />

            <div className={styles.formRow}>
              <div className={styles.fieldGroup}>
                <label htmlFor="contact-name">Nombre completo</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Ej: Juan Pérez"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? styles.inputError : ""}
                  autoComplete="name"
                />
                {errors.name && (
                  <span className={styles.errorMessage}>{errors.name}</span>
                )}
              </div>
              <div className={styles.fieldGroup}>
                <label htmlFor="contact-phone">Teléfono</label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  placeholder="Ej: 612 345 678"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? styles.inputError : ""}
                  autoComplete="tel"
                />
                {errors.phone && (
                  <span className={styles.errorMessage}>{errors.phone}</span>
                )}
              </div>
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="contact-email">Correo electrónico</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="Ej: tu@correo.com"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? styles.inputError : ""}
                autoComplete="email"
              />
              {errors.email && (
                <span className={styles.errorMessage}>{errors.email}</span>
              )}
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="contact-message">Mensaje</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Cuéntanos en qué podemos ayudarte..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? styles.inputError : ""}
              />
              {errors.message && (
                <span className={styles.errorMessage}>{errors.message}</span>
              )}
            </div>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={submitted}
            >
              {submitted ? "Enviando..." : "Enviar mensaje →"}
            </button>
          </form>
        </div>

        {/* RIGHT — INFO SIDEBAR */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            <div className={styles.sidebarIcon}>✉</div>
            <h3>Email</h3>
            <p>rayanautoescuela@gmail.com</p>
          </div>

          <div className={styles.sidebarCard}>
            <div className={styles.sidebarIcon}>📍</div>
            <h3>Visítanos</h3>
            <p>
              C. Ministro Fernández Ordóñez, 6
              <br />
              28924 Alcorcón, Madrid
            </p>
          </div>

          <div className={styles.sidebarCard}>
            <div className={styles.sidebarIcon}>🕐</div>
            <h3>Horario</h3>
            <p>
              Lunes a Viernes
              <br />
              10:00–14:00 / 17:00–20:00
            </p>
          </div>

          <div className={styles.sidebarNote}>
            Respuesta garantizada en menos de <strong>24 horas</strong>
          </div>
        </aside>
      </section>
    </main>
  );
}
