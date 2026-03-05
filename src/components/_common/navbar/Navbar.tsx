"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useNavbarScroll } from "./useNavbarScroll";
import { Hamburger } from "./hamburguer/Hamburger";
import styles from "./navbar.module.css";

import { defineElement } from "@lordicon/element";
if (typeof window !== "undefined") {
  defineElement();
}

export function Navbar() {
  const pathname = usePathname();
  const { visible } = useNavbarScroll();

  return (
    <header className={styles.dark} style={{ top: visible ? "0" : "-100px" }}>
      <img src="/media/png/logo-rayan.png" alt="Logo" className={styles.logo} />

      <nav id={styles.nav_bar}>
        <Link
          href="/"
          id="icon1"
          className={pathname === "/" ? styles.actual_page : ""}
        >
          <lord-icon
            src="/svg/home-animated.json"
            trigger="hover"
            target="#icon1"
            style={{ width: 25, height: 25 }}
          />
          Inicio
        </Link>

        <Link
          href="/servicios"
          id="icon2"
          className={pathname === "/servicios" ? styles.actual_page : ""}
        >
          <lord-icon
            src="/svg/cart.json"
            trigger="hover"
            target="#icon2"
            style={{ width: 25, height: 25 }}
          />
          Servicios
        </Link>

        <Link
          href="/nosotros"
          id="icon3"
          className={pathname === "/nosotros" ? styles.actual_page : ""}
        >
          <lord-icon
            src="/svg/nosotros.json"
            trigger="hover"
            target="#icon3"
            style={{ width: 25, height: 25 }}
          />
          Nosotros
        </Link>

        <Link
          href="/galeria"
          id="icon4"
          className={pathname === "/galeria" ? styles.actual_page : ""}
        >
          <lord-icon
            src="/svg/gallery.json"
            trigger="hover"
            target="#icon4"
            style={{ width: 25, height: 25 }}
          />
          Galería
        </Link>

        <Link
          href="/dondeestamos"
          id="icon5"
          className={pathname === "/dondeestamos" ? styles.actual_page : ""}
        >
          <lord-icon
            src="/svg/location.json"
            trigger="hover"
            target="#icon5"
            style={{ width: 25, height: 25 }}
          />
          Dónde estamos
        </Link>

        <Link
          href="/contacto"
          id="icon6"
          className={pathname === "/contacto" ? styles.actual_page : ""}
        >
          <lord-icon
            src="/svg/contact.json"
            trigger="hover"
            target="#icon6"
            style={{ width: 25, height: 25 }}
          />
          Contacto
        </Link>
      </nav>

      <Hamburger />
    </header>
  );
}
