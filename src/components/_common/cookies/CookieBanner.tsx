"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./cookieBanner.module.css";

const COOKIE_KEY = "cookie_consent";

type ConsentValue = "accepted" | "rejected";

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getCookie(COOKIE_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function handleConsent(value: ConsentValue) {
    setCookie(COOKIE_KEY, value, 365);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className={styles.banner} role="dialog" aria-label="Consentimiento de cookies">
      <div className={styles.content}>
        <p>
          Utilizamos cookies propias y de terceros para mejorar tu experiencia
          de navegación. Puedes aceptar todas las cookies o rechazarlas.{" "}
          <Link href="/informacion/cookies" className={styles.link}>
            Más información
          </Link>
        </p>
        <div className={styles.actions}>
          <button
            className={styles.acceptButton}
            onClick={() => handleConsent("accepted")}
          >
            Aceptar cookies
          </button>
          <button
            className={styles.rejectButton}
            onClick={() => handleConsent("rejected")}
          >
            Rechazar
          </button>
        </div>
      </div>
    </div>
  );
}
