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
    <header
      className={styles.dark}
      style={{
        top: visible ? "0" : "-100px",
        transition: "top 0.3s ease-in-out",
        boxShadow: "0px 4px 8px rgba(255,255,255,0.2)",
      }}
    >
      {/* LOGO */}
      <img
        src="/media/png/logo-rayan.png"
        alt="Logo"
        style={{ height: "70px" }}
      />

      {/* NAV */}
      <nav id={styles.nav_bar}>
        <Link href="/" className={pathname === "/" ? styles.actual_page : ""}>
          <lord-icon
            src="/svg/home-animated.json"
            trigger="hover"
            style={{ width: 25, height: 25 }}
          />
          <span>Inicio</span>
        </Link>

        <Link
          href="/servicios"
          className={pathname === "/servicios" ? styles.actual_page : ""}
        >
          <lord-icon
            src="/svg/cart.json"
            trigger="hover"
            style={{ width: 25, height: 25 }}
          />
          <span>Servicios</span>
        </Link>

        <Link
          href="/noticias"
          className={pathname === "/noticias" ? styles.actual_page : ""}
        >
          <lord-icon
            src="/svg/news.json"
            trigger="hover"
            style={{ width: 25, height: 25 }}
          />
          <span>Noticias</span>
        </Link>

        <Link
          href="/galeria"
          className={pathname === "/galeria" ? styles.actual_page : ""}
        >
          <lord-icon
            src="/svg/gallery.json"
            trigger="hover"
            style={{ width: 25, height: 25 }}
          />
          <span>Galería</span>
        </Link>

        <Link
          href="/dondeestamos"
          className={pathname === "/dondeestamos" ? styles.actual_page : ""}
        >
          <lord-icon
            src="/svg/location.json"
            trigger="hover"
            style={{ width: 25, height: 25 }}
          />
          <span>Dónde estamos</span>
        </Link>

        <Link
          href="/contacto"
          className={pathname === "/contacto" ? styles.actual_page : ""}
        >
          <lord-icon
            src="/svg/contact.json"
            trigger="hover"
            style={{ width: 25, height: 25 }}
          />
          <span>Contacto</span>
        </Link>
      </nav>

      {/* HAMBURGER */}
      <Hamburger />
    </header>
  );
}
