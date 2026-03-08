"use client";

import styles from "./DondeEstamos.module.css";
import shared from "@styles/shared.module.css";
import { useReveal } from "@services/reveal";
import { reviews, overallRating, totalReviews } from "@services/reviews";
import type { Review } from "@services/reviews";

const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.0!2d-3.835!3d40.345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4226a6474dd969%3A0x0!2sC.+Ministro+Fern%C3%A1ndez+Ord%C3%B3%C3%B1ez%2C+6%2C+28924+Alcorc%C3%B3n%2C+Madrid!5e0!3m2!1ses!2ses";

function GoogleLogo() {
  return (
    <svg viewBox="0 0 74 24" width="74" height="24" className={styles.googleLogo}>
      <path d="M9.24 8.19v2.46h5.88c-.18 1.38-.64 2.39-1.34 3.1-.86.86-2.2 1.8-4.54 1.8-3.62 0-6.45-2.92-6.45-6.54s2.83-6.54 6.45-6.54c1.95 0 3.38.77 4.43 1.76L15.4 2.5C13.94 1.08 11.98 0 9.24 0 4.28 0 .11 4.04.11 9s4.17 9 9.13 9c2.68 0 4.7-.88 6.28-2.52 1.62-1.62 2.13-3.91 2.13-5.75 0-.57-.04-1.1-.13-1.54H9.24z" fill="#4285F4" />
      <path d="M25 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52 0-2.09 1.52-3.52 3.28-3.52s3.28 1.43 3.28 3.52c0 2.07-1.52 3.52-3.28 3.52z" fill="#EA4335" />
      <path d="M53.58 7.49h-.09c-.57-.68-1.67-1.3-3.06-1.3C47.53 6.19 45 8.72 45 12c0 3.26 2.53 5.81 5.43 5.81 1.39 0 2.49-.62 3.06-1.32h.09v.81c0 2.22-1.19 3.41-3.1 3.41-1.56 0-2.53-1.12-2.93-2.07l-2.22.92c.64 1.54 2.33 3.43 5.15 3.43 2.99 0 5.52-1.76 5.52-6.05V6.49h-2.42v1zm-2.93 8.03c-1.76 0-3.1-1.5-3.1-3.52 0-2.05 1.34-3.52 3.1-3.52 1.74 0 3.1 1.5 3.1 3.54 0 2.02-1.36 3.5-3.1 3.5z" fill="#4285F4" />
      <path d="M38 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52 0-2.09 1.52-3.52 3.28-3.52s3.28 1.43 3.28 3.52c0 2.07-1.52 3.52-3.28 3.52z" fill="#FBBC05" />
      <path d="M58 .24h2.51v17.57H58z" fill="#34A853" />
      <path d="M68.26 15.52c-1.3 0-2.22-.59-2.82-1.76l7.77-3.21-.26-.66c-.48-1.3-1.96-3.7-4.97-3.7-2.99 0-5.48 2.35-5.48 5.81 0 3.26 2.46 5.81 5.76 5.81 2.66 0 4.2-1.63 4.84-2.57l-1.98-1.32c-.66.96-1.56 1.6-2.86 1.6zm-.18-7.15c1.03 0 1.91.53 2.2 1.28l-5.25 2.17c0-2.44 1.73-3.45 3.05-3.45z" fill="#EA4335" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className={styles.reviewCard}>
      <div className={styles.reviewGoogleIcon}>
        <GoogleIcon />
      </div>

      <div className={styles.reviewHeader}>
        <div
          className={styles.reviewAvatar}
          style={{ background: review.avatarColor }}
        >
          {review.initials}
        </div>
        <div className={styles.reviewMeta}>
          <div className={styles.reviewAuthor}>{review.author}</div>
        </div>
      </div>

      <div className={styles.reviewRatingRow}>
        <div className={styles.reviewStars}>
          {"★".repeat(review.rating)}
          {"☆".repeat(5 - review.rating)}
        </div>
        <span className={styles.reviewTime}>{review.timeAgo}</span>
      </div>

      <p className={styles.reviewText}>{review.text}</p>
    </article>
  );
}

export default function DondeEstamos() {
  useReveal(shared);

  return (
    <main className={styles.page}>
      <div className={shared.gradientWave} />

      {/* HERO */}
      <section className={styles.hero}>
        <h1>
          Dónde <span className={shared.glow}>Estamos</span>
        </h1>
        <p>
          Nos encontramos en el corazón de Alcorcón. Ven a conocernos y
          descubre por qué somos la autoescuela de referencia en la zona.
        </p>
      </section>

      {/* MAP + INFO */}
      <section className={`${styles.mapSection} ${shared.reveal}`}>
        <div className={styles.mapContainer}>
          <iframe
            src={MAPS_EMBED_URL}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Autoescuela Rayán"
          />
        </div>

        <div className={styles.infoCards}>
          <div className={styles.infoCard}>
            <h3>Dirección</h3>
            <p>
              C. Ministro Fernández Ordóñez, 6
              <br />
              28924 Alcorcón, Madrid
            </p>
          </div>

          <div className={styles.infoCard}>
            <h3>Horario</h3>
            <p>
              Lunes a Viernes: 10:00 – 14:00 / 17:00 – 20:00
              <br />
              Sábados y Domingos: Cerrado
            </p>
          </div>

          <div className={styles.infoCard}>
            <h3>Contacto</h3>
            <p>
              rayanautoescuela@gmail.com
              <br />
              Síguenos en Instagram y Facebook
            </p>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className={`${styles.reviewsSection} ${shared.reveal}`}>
        <div className={styles.googleSummary}>
          <GoogleLogo />
          <div className={styles.summaryRating}>
            <span className={styles.ratingNumber}>{overallRating}</span>
            <div className={styles.summaryStars}>
              {"★".repeat(Math.round(overallRating))}
              {"☆".repeat(5 - Math.round(overallRating))}
            </div>
            <span className={styles.summaryCount}>
              {totalReviews} reseñas
            </span>
          </div>
        </div>

        <div className={styles.reviewsHeader}>
          <h2>
            Lo que dicen nuestros <span className={shared.glow}>alumnos</span>
          </h2>
        </div>

        <div className={styles.reviewsTrack}>
          {reviews.map((review) => (
            <ReviewCard key={review.author} review={review} />
          ))}
        </div>
      </section>
    </main>
  );
}
