import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

function Input({ label, id, onChange, placeholder, value, name, type, showPassword }) {
  const [togglePassword, setTogglePassword] = useState(false);

  function toggleVisibility() {
    setTogglePassword(togglePassword ? false : true);
  }
  return (
    <div className={styles.formWrap}>
      <label className={styles.formWrap__label}> {label} </label>
      <div className={styles.formWrap__input}>
        <input
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          name={name}
          type={showPassword && togglePassword ? 'password' : type}
        />
        <div onClick={toggleVisibility} className={showPassword ? styles.icon : styles.display}>
          {<FontAwesomeIcon icon={togglePassword ? faEye : faEyeSlash} />}
        </div>
      </div>
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
  type: PropTypes.string,
  showPassword: PropTypes.bool,
  name: PropTypes.string
};

export default Input;
