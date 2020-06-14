import React from "react";
import styles from "./NavigationItem.css";

const NavigationItem = ({ children, link, active }) => (
  <li className={styles.NavigationItem}>
    <a href={link} className={active ? styles.active : ""}>
      {children}
    </a>
  </li>
);

export default NavigationItem;
