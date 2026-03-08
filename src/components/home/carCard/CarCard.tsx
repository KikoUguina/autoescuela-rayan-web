import Image from "next/image";
import fleetStyles from "../homeSections/Fleet.module.css";
import type { Car } from "@shared-types/index";

export default function CarCard({ name, description, type, image, premium }: Car) {
  return (
    <article className={`${fleetStyles.carCard} ${premium ? fleetStyles.premium : ""}`}>
      <div className={fleetStyles.carImage}>
        <Image
          src={image}
          alt={name}
          width={640}
          height={427}
          quality={75}
          sizes="(max-width: 768px) 360px, 380px"
        />
      </div>

      <h3>{name}</h3>
      <p>{description}</p>

      <span className={fleetStyles.carTag}>{type}</span>
    </article>
  );
}
