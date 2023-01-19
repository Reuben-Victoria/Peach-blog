import React from 'react';
import Button from '../../Common/Button/Button';
import styles from './DeleteModal.module.scss';
import PropTypes from 'prop-types';
function DeleteModal(toggle, setToggle) {
  return (
    <div className={toggle ? styles.modal : styles.display}>
      <div
        className={styles.overlay}
        onClick={() => {
          setToggle(!toggle);
        }}></div>
      <div className={styles.modalContent}>
        <h1>Are you sure you want to delete your Account</h1>
        <Button text={'Yes'} />
        <Button text={'No'} />
      </div>
    </div>
  );
}
DeleteModal.PropTypes = {
  toggle: PropTypes.bool,
  setToggle: PropTypes.func
};
export default DeleteModal;
