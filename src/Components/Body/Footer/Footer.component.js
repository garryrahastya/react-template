import React from 'react'
import styles from "./Footer.module.css"

function Footer() {
  return (
    <footer>
  <div class={styles["footer-container"]}>
    <div class={styles.left}>
      <h3>Company Name</h3>
      <p>123 Main St<br />City, State ZIP<br />Phone: (123) 456-7890</p>
    </div>
    <div class={styles.right}>
      <h3>Follow Us</h3>
      <ul>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Instagram</a></li>
      </ul>
    </div>
  </div>
</footer>
  )
}

export default Footer