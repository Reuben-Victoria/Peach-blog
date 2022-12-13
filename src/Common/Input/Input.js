import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';

function Input({ label, id, onChange, placeholder, value, name }) {
  return (
    <div className={styles.formWrap}>
      <label className={styles.formWrap__label}> {label} </label>
      <div>
        <input id={id} placeholder={placeholder} onChange={onChange} value={value} name={name} />
      </div>
      <FontAwesomeIcon icon={faEye} />
    </div>
  );
}

Input.propTypes = {
  for: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string
};

export default Input;
