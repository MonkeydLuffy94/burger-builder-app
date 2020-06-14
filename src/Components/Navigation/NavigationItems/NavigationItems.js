import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import styles from "./NavigationItems.css";

const NavigationItems = () => (
  <ul className={styles.NavigationItems}>
    <NavigationItem link="/" active>
      <i className="fas fa-home" />
    </NavigationItem>
    <NavigationItem link="/">
      <i className="fas fa-shopping-bag" />
    </NavigationItem>
  </ul>
);

export default NavigationItems;
