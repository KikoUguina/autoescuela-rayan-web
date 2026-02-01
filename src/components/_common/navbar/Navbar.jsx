"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useNavbarScroll } from "./useNavbarScroll";
import { Hamburger } from "./hamburguer/Hamburger";
import styles from "./navbar.module.css";
import { ThreeDots } from "react-loader-spinner";

export function Navbar() {
  const pathname = usePathname();
  const { visible, showShadow } = useNavbarScroll();
  const headerClass = styles.dark;
  const headerId = "";
  const srcImg = "/media/png/logo-rayan.png";
  const boxShadow = "0px 4px 8px 0px rgba(255, 255, 255, 0.2)";

  const pages = [
    { name: "Inicio", href: "/", icon: "home.svg" },
    { name: "Servicios", href: "/servicios", icon: "services.svg" },
    { name: "Noticias", href: "/noticias", icon: "news.svg" },
    { name: "Galería", href: "/galeria", icon: "gallery.svg" },
    { name: "Dónde estamos", href: "/dondeestamos", icon: "location.svg" },
    { name: "Contacto", href: "/contacto", icon: "contact.svg" },
  ];

  return (
    <>
      <header
        id={headerId}
        className={headerClass}
        style={{
          top: visible ? "0" : "-100px",
          transition: "top 0.3s ease-in-out",
          boxShadow: boxShadow,
        }}
      >
        <img src={srcImg} style={{ height: "70px" }} alt="" />
        <nav id={styles.nav_bar}>
          {pages.map((page) => {
            if (page.name === "Loading...") {
              return (
                <ThreeDots
                  key={page.name}
                  visible={true}
                  height="35"
                  width="35"
                  color="#4fa94d"
                  radius="9"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              );
            }

            return (
              <Link
                key={page.name}
                href={page.href}
                className={pathname === page.href ? styles.actual_page : ""}
              >
                <img src={`/svg/${page.icon}`} alt={page.name} />
                {page.name}
              </Link>
            );
          })}
        </nav>
        <Hamburger />
      </header>
    </>
  );
}
