import React from 'react';
import styles from './Success.module.scss';
import PropTypes from 'prop-types';
import successLogo from '../../assets/successLogo.svg';
function Success({ heading, text }) {
  return (
    <div className={styles.formWrap}>
      <div className={styles.formWrap__logo}>
        <img src={successLogo} alt="CheckMark success" />
      </div>
      <h1>{heading}</h1>
      <p className={styles.formWrap__description}>{text}</p>
    </div>
  );
}

Success.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string
};

export default Success;
