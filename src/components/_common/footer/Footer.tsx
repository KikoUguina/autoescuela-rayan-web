"use client";

import styles from "./footer.module.css";
import LegalPages from "./legalPages/LegalPages";
import GoToTopLink from "./goToTopLink/GoToTopLink";
import ContactData from "./contactData/ContactData";

export function Footer() {
  return (
    <footer id={styles.footer}>
      <div id={styles.footer_data}>
        <LegalPages />
        <GoToTopLink />
        <ContactData />
      </div>

      <span id={styles.copyright}>Copyright 2026 © kikodev</span>
    </footer>
  );
}
