"use client";

import Link from "next/link";
import styles from "./modalNavbar.module.css";
import { usePathname } from "next/navigation";

const pages = [
  { name: "Inicio", href: "/", icon: "/svg/home-animated.json" },
  { name: "Servicios", href: "/servicios", icon: "/svg/cart.json" },
  { name: "Nosotros", href: "/nosotros", icon: "/svg/nosotros.json" },
  { name: "Galería", href: "/galeria", icon: "/svg/gallery.json" },
  { name: "Dónde estamos", href: "/dondeestamos", icon: "/svg/location.json" },
  { name: "Contacto", href: "/contacto", icon: "/svg/contact.json" },
];

export default function ModalNavbar() {
  const pathname = usePathname();

  return (
    <div id={styles.modalNavbar}>
      {pages.map((page, i) => (
        <Link
          key={page.name}
          href={page.href}
          id={`modal-icon-${i}`}
          className={pathname === page.href ? styles.actual_page : ""}
        >
          <lord-icon
            src={page.icon}
            trigger="hover"
            target={`#modal-icon-${i}`}
            colors="primary:#ffffff"
            style={{ width: 32, height: 32 }}
          />
          {page.name}
        </Link>
      ))}
    </div>
  );
}
