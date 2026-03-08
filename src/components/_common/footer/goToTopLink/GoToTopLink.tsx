import styles from "./goToTopLink.module.css";
import type { MouseEvent } from "react";

export default function GoToTopLink() {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div id={styles.go_to_top_link}>
      <a href="#" onClick={handleClick}>
        <img src="/svg/arrow_upward.svg" alt="" />
        <img src="/media/png/logo-rayan.png" alt="Autoescuela Rayan" />
      </a>
    </div>
  );
}
