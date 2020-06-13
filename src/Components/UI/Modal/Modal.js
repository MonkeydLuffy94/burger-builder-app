import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import Button from "../Button/Button";
import styles from "./Modal.css";

const Modal = ({ children, show, closeModal, headerText }) => {
  return (
    <React.Fragment>
      {show && <Backdrop handleClickOnBackdrop={closeModal} />}
      <div
        className={`${styles.Modal} ${
          show ? styles.ModalShow : styles.ModalClose
        }`}
      >
        <header className={styles.ModalHeader}>
          <h5>{headerText}</h5>
          <Button onClick={closeModal} type="HeaderClose">
            <i class="fas fa-times" />
          </Button>
        </header>
        {children}
      </div>
    </React.Fragment>
  );
};

export default Modal;
