"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useNavbarScroll } from "./useNavbarScroll";
import { Hamburger } from "./hamburguer/Hamburger";
import styles from "./navbar.module.css";

import { defineElement } from "@lordicon/element";
defineElement();

export function Navbar() {
  const pathname = usePathname();
  const { visible } = useNavbarScroll();

  return (
    <header className={styles.dark} style={{ top: visible ? "0" : "-100px" }}>
      <img src="/media/png/logo-rayan.png" alt="Logo" className={styles.logo} />

      <nav id={styles.nav_bar}>
        <a
          href="/"
          id="icon1"
          className={pathname === "/" ? styles.actual_page : ""}
        >
          <lord-icon
            src="/svg/home-animated.json"
            trigger="hover"
            target="#icon1"
            style={{ width: 22, height: 22 }}
          />
          Inicio
        </a>

        <a
          href="/servicios"
          id="icon2"
          className={pathname === "/servicios" ? styles.actual_page : ""}
        >
          <lord-icon
            src="/svg/cart.json"
            trigger="hover"
            target="#icon2"
            style={{ width: 22, height: 22 }}
          />
          Servicios
        </a>

        <a
          href="/noticias"
          id="icon3"
          className={pathname === "/noticias" ? styles.actual_page : ""}
        >
          <lord-icon
            src="/svg/news.json"
            trigger="hover"
            target="#icon3"
            style={{ width: 22, height: 22 }}
          />
          Noticias
        </a>

        <a
          href="/galeria"
          id="icon4"
          className={pathname === "/galeria" ? styles.actual_page : ""}
        >
          <lord-icon
            src="/svg/gallery.json"
            trigger="hover"
            target="#icon4"
            style={{ width: 22, height: 22 }}
          />
          Galería
        </a>

        <a
          href="/dondeestamos"
          id="icon5"
          className={pathname === "/dondeestamos" ? styles.actual_page : ""}
        >
          <lord-icon
            src="/svg/location.json"
            trigger="hover"
            target="#icon5"
            style={{ width: 22, height: 22 }}
          />
          Dónde estamos
        </a>

        <a
          href="/contacto"
          id="icon6"
          className={pathname === "/contacto" ? styles.actual_page : ""}
        >
          <lord-icon
            src="/svg/contact.json"
            trigger="hover"
            target="#icon6"
            style={{ width: 22, height: 22 }}
          />
          Contacto
        </a>
      </nav>

      <Hamburger />
    </header>
  );
}
