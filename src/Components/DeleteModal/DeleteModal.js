import React from 'react';
// import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../../Common/Button/Button';
import { useSelector } from 'react-redux';
import styles from './DeleteModal.module.scss';

function DeleteModal({ toggle, setToggle, text, onClick }) {
  const { loading } = useSelector((state) => state.users);
  return (
    <div className={toggle ? styles.modal : styles.display}>
      <div
        className={styles.overlay}
        onClick={() => {
          setToggle(!toggle);
        }}></div>
      <div className={styles.modalContent}>
        <h2>Are you sure you want to delete your {text}?</h2>
        <div className={styles.modalContent__buttons}>
          <Button text={'Yes'} size={'md'} theme={'delete'} loading={loading} onClick={onClick} />
          <Button
            text={'No'}
            size={'md'}
            theme={'primary'}
            onClick={() => {
              setToggle(!toggle);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;

DeleteModal.propTypes = {
  toggle: PropTypes.bool,
  setToggle: PropTypes.func,
  onClick: PropTypes.func,
  text: PropTypes.string
};
