import React from "react";
import styles from "./SideDrawer.css";
import NavigationItems from "../../Navigation/NavigationItems/NavigationItems";

const SideDrawer = ({ isOpenSideDrawer }) => {
  return (
    <div
      className={`${styles.SideDrawer} ${
        isOpenSideDrawer ? styles.Open : styles.Close
      }`}
    >
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default SideDrawer;
