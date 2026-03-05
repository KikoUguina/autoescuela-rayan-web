import shared from "@styles/shared.module.css";
import fleetStyles from "./Fleet.module.css";
import CarCard from "../carCard/CarCard";
import { useReveal } from "@services/reveal";
import type { Car } from "@shared-types/index";

const cars: Car[] = [
  {
    name: "Volkswagen Golf GTI",
    description: "Potencia, control y respuesta inmediata.",
    type: "Manual",
    image: "/media/png/golf_gti_3_4.jpg",
    premium: true,
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
  },
];

export default function FleetSection() {
  useReveal(shared);

  return (
    <section className={`${fleetStyles.fleet} ${shared.reveal}`}>
      <h2 className={fleetStyles.fleetTitle}>
        Nuestros <span className={shared.glow}>vehículos</span>
      </h2>

      <div className={fleetStyles.fleetGrid}>
        {cars.map((car, i) => (
          <CarCard key={i} {...car} />
        ))}
      </div>
    </section>
  );
}
