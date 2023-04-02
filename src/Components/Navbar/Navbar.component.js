import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../Assets/logo1.png'

function Navbar() {
  return (
    <nav className={styles.navbar}>
    <div className={styles["navbar-container"]}>
        <div className={styles["logo-container"]}>
            <img src={logo} alt='logo'/>
        </div>
    </div>
    </nav>
  )
}

export default Navbar