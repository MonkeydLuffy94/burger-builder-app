import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import styles from "./Toolbar.css";

const Toolbar = ({ onClick }) => (
  <header className={styles.Toolbar}>
    <Logo />
    <div className={styles.SIdedrawerToggleMenu} onClick={onClick}>
      <i className="fas fa-ellipsis-v fa-lg fa-fw" />
    </div>
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;
