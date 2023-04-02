import React from "react";
import styles from "./Body.module.css";
import image from "../../Assets/10-Social-Media-Marketing.png";
import image1 from "../../Assets/logofeature.jpg";
import Card from "./Card/Card.component"
import Pricing from "./Pricing Card/Pricing.component";
import Footer from "./Footer/Footer.component";

function Header() {
  return (
    <div className={styles.container}>
    <section>
      <div className={styles["content-container"]}>
        <div className={styles["left-content"]}>
          <h1>Landing template for startups</h1>
          <p>
            Our landing page template works for all the devices, so you only
            have to setup it once, and get beautiful results forever.
          </p>
          <button className={styles["button-content"]}>
            Pricing and Plans
          </button>
        </div>
        <div className={styles["right-content"]}>
          <img src={image} alt="hero" />
        </div>
      </div>
    </section>
    <section>
      <div className={styles["card-container"]}>
        <div className={styles.card}>
        <Card 
        title="Feature"
        logo={image1}
        description="A pseudo-Latin text used in web design, layout, and printing in place of English to emphasise design elements."
        />
        </div>
        <div className={styles.card}>
        <Card 
        title="Feature"
        logo={image1}
        description="A pseudo-Latin text used in web design, layout, and printing in place of English to emphasise design elements."
        />
        </div>
        <div className={styles.card}>
        <Card 
        title="Feature"
        logo={image1}
        description="A pseudo-Latin text used in web design, layout, and printing in place of English to emphasise design elements."
        />
        </div>
        <div className={styles.card}>
        <Card 
        title="Feature"
        logo={image1}
        description="A pseudo-Latin text used in web design, layout, and printing in place of English to emphasise design elements."
        />
        </div>
      </div>
    </section>
    <hr />
    <section>
      <div className={styles["price-container"]}>
      <Pricing />
      </div>
    </section>
    <section>
      <Footer />
    </section>
    </div>
  );
}

export default Header;
