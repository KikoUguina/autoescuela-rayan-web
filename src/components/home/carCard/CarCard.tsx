import fleetStyles from "../homeSections/Fleet.module.css";
import type { Car } from "@shared-types/index";

export default function CarCard({ name, description, type, image, premium }: Car) {
  return (
    <article className={`${fleetStyles.carCard} ${premium ? fleetStyles.premium : ""}`}>
      <div className={fleetStyles.carImage}>
        <img src={image} alt={name} />
      </div>

      <h3>{name}</h3>
      <p>{description}</p>

      <span className={fleetStyles.carTag}>{type}</span>
    </article>
  );
}
