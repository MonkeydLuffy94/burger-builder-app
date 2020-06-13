import React from "react";
import styles from "./Button.css";

const Button = ({ children, type, onClick }) => (
  <button
    className={`${type !== "HeaderClose" ? `${styles.Button}` : ""} ${
      styles[type]
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
