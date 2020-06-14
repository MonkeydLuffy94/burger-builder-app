import React from "react";
import logoImage from "../../assets/images/burger-logo.png";
import styles from "./Logo.css";

const Logo = () => (
  <div className={styles.Logo}>
    <img src={logoImage} alt="Burger-Logo" />
  </div>
);

export default Logo;
