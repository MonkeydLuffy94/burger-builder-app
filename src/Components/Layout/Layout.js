import React, { useState } from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import classes from "./Layout.css";
import BurgerBuilder from "../BurgerBuilder/BurgerBuilder";

const Layout = (props) => {
  const [isOpenSideDrawer, handleToggleSideDrawer] = useState(false);

  return (
    <React.Fragment>
      <Toolbar onClick={() => handleToggleSideDrawer(!isOpenSideDrawer)} />
      <SideDrawer isOpenSideDrawer={isOpenSideDrawer} />
      <main className={classes.content}>
        <BurgerBuilder isOpenSideDrawer={isOpenSideDrawer} />
      </main>
    </React.Fragment>
  );
};
export default Layout;
