import React from "react";
import styles from "./Backdrop.css";

const Backdrop = ({ handleClickOnBackdrop }) => (
  <div className={styles.Backdrop} onClick={handleClickOnBackdrop}></div>
);

export default Backdrop;
