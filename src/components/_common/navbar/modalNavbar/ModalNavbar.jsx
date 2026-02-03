import Link from "next/link";
import styles from "./modalNavbar.module.css";
import { usePathname } from "next/navigation";

export default function ModalNavbar() {
  const pathname = usePathname();
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
    </>
  );
}
