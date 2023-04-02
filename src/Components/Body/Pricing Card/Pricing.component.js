import React from "react";
import styles from "./Pricing.module.css";

function Pricing() {
  return (
    <div className={styles["price-container"]}>
        <h1>Pricing</h1>
    <div className={styles.container}>
      <div className={styles["pricing-card"]}>
        <div className={styles["pricing-header"]}>
          <h2>Starter</h2>
          <h3><span>$</span>9.99<span>/Mo</span></h3>
        </div>
        <hr />
        <div className={styles["pricing-body"]}>
          <ul>
            <li>Lorem ipsum is common text</li>
            <li>Lorem ipsum is common text</li>
            <li>Lorem ipsum is common text</li>
            <li>Lorem ipsum is common text</li>
          </ul>
        </div>
        <div className={styles["pricing-footer"]}>
          <button className={styles.btn}>get early access</button>
        </div>
      </div>

      <div className={styles["pricing-card"]}>
        <div className={styles["pricing-header"]}>
          <h2>Professional</h2>
          <h3><span>$</span>9.99<span>/Mo</span></h3>
        </div>
        <hr />
        <div className={styles["pricing-body"]}>
          <ul>
            <li>Lorem ipsum is common text</li>
            <li>Lorem ipsum is common text</li>
            <li>Lorem ipsum is common text</li>
            <li>Lorem ipsum is common text</li>
          </ul>
        </div>
        <div className={styles["pricing-footer"]}>
          <button className={styles.btn}>get early access</button>
        </div>
      </div>

      <div className={styles["pricing-card"]}>
        <div className={styles["pricing-header"]}>
          <h2>Business</h2>
          <h3><span>$</span>9.99<span>/Mo</span></h3>
        </div>
        <hr />
        <div className={styles["pricing-body"]}>
          <ul>
            <li>Lorem ipsum is common text</li>
            <li>Lorem ipsum is common text</li>
            <li>Lorem ipsum is common text</li>
            <li>Lorem ipsum is common text</li>
          </ul>
        </div>
        <div className={styles["pricing-footer"]}>
          <button className={styles.btn}>get early access</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Pricing;
