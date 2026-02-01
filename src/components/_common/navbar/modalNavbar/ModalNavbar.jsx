import Link from "next/link";
import styles from "./modalNavbar.module.css";
import { usePathname } from "next/navigation";

export default function ModalNavbar() {
  const pathname = usePathname();
  const pages = [
    { name: "Inicio", href: "/", icon: "home.svg" },
    { name: "Autoescuela Rayán", href: "/autoescuelarayan", icon: "laela.svg" },
    { name: "Servicios", href: "/servicios", icon: "blog.svg" },
    { name: "Noticias", href: "/noticias", icon: "blog.svg" },
    { name: "Galería", href: "/galeria", icon: "unete.svg" },
    { name: "Dónde estamos", href: "/dondeestamos", icon: "delreves.svg" },
    { name: "Contacto", href: "/contacto", icon: "delreves.svg" },
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
            <img
              src={
                page.name === "Perfil" ? page.icon : `/icons/white/${page.icon}`
              }
              alt=""
            />
            {page.name}
          </Link>
        ))}
        {user && <button onClick={handleLogout}>Cerrar Sesión</button>}
      </div>
    </>
  );
}
