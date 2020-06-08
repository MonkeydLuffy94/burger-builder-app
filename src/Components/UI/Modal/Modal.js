import React from "react";
import Backdrop from "../Backdrop/Backdrop";
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
          <button onClick={closeModal}>
            <i class="fas fa-times" />
          </button>
        </header>
        {children}
      </div>
    </React.Fragment>
  );
};

export default Modal;
