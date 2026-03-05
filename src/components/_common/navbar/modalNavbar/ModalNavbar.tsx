import Link from "next/link";
import styles from "./modalNavbar.module.css";
import { usePathname } from "next/navigation";
import type { NavItem } from "@shared-types/index";

const pages: NavItem[] = [
  { name: "Inicio", href: "/", icon: "home.svg" },
  { name: "Servicios", href: "/servicios", icon: "services.svg" },
  { name: "Nosotros", href: "/nosotros", icon: "news.svg" },
  { name: "Galería", href: "/galeria", icon: "gallery.svg" },
  { name: "Dónde estamos", href: "/dondeestamos", icon: "location.svg" },
  { name: "Contacto", href: "/contacto", icon: "contact.svg" },
];

export default function ModalNavbar() {
  const pathname = usePathname();

  return (
    <div id={styles.modalNavbar}>
      {pages.map((page) => (
        <Link
          key={page.name}
          href={page.href}
          className={pathname === page.href ? styles.actual_page : ""}
        >
          <img src={`/svg/white/${page.icon}`} alt="" />
          {page.name}
        </Link>
      ))}
    </div>
  );
}
