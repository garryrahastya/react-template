import React from "react";
import styles from "./Card.module.css";

function Card({ title, logo, description }) {
  return (
    <div className={styles["card-container"]}>
      <div className={styles["logo-card"]}>
        <img src={logo} alt="" />
      </div>
      <div className={styles["card-content"]}>
        <div className={styles["card-title"]}>
          <h1>{title}</h1>
        </div>
        <div className={styles["card-description"]}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
