import styles from "./../Home.module.css";
import CarCard from "./../carCard/CarCard";

const cars = [
  {
    name: "Volkswagen Golf GTI",
    description: "Potencia, control y respuesta inmediata.",
    type: "Manual",
    image: "/media/png/golf_gti_3_4.jpg",
  },
  {
    name: "Volkswagen Polo GTI",
    description: "Ágil y compacto, perfecto para ciudad.",
    type: "Manual",
    image: "/media/png/polo_gti_3_4.jpg",
  },
  {
    name: "Volkswagen Golf GTD",
    description: "Equilibrio entre eficiencia y potencia.",
    type: "Manual",
    image: "/media/png/golf_gtd_3_4.jpg",
  },
  {
    name: "BMW 120d xDrive",
    description: "Tracción total y cambio automático.",
    type: "Automático",
    image: "/media/png/bmw_120d_3_4.jpg",
    premium: true,
  },
];

export default function FleetSection() {
  return (
    <section className={styles.fleet}>
      <h2 className={styles.fleetTitle}>Nuestra flota</h2>

      <div className={styles.fleetGrid}>
        {cars.map((car, i) => (
          <CarCard key={i} {...car} />
        ))}
      </div>
    </section>
  );
}
