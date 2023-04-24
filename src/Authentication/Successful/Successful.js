import React from 'react';
import PropTypes from 'prop-types';
import Button from 'common/button/Button';
import Success from 'components/success/Success';
import styles from './Succesful.module.scss';

import { Link } from 'react-router-dom';

function Successful({ toggle, setToggle }) {
  return (
    <div className={toggle ? styles.modal : styles.display}>
      <div
        className={styles.overlay}
        onClick={() => {
          setToggle(!toggle);
        }}></div>
      <div className={styles.modalContent}>
        <div className={styles.successWrap}>
          <Success heading={'Successful'} text={'Your password have been successfully reset'} />
          <Link to="/login">
            <Button type={'submit'} theme={'secondary'} size={'lg'} text={'Continue'} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Successful;
Successful.propTypes = {
  toggle: PropTypes.bool,
  setToggle: PropTypes.any
};
