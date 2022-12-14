import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Button.module.scss';

function Button({ text, type, theme, size, disabled, variant }) {
  return (
    <button
      disabled={disabled}
      type={type}
      className={classnames(
        styles.btn,
        styles[`btn__${theme}`],
        styles[`btn__${size}`],
        styles[`btn__${variant}`]
      )}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  theme: PropTypes.string,
  width: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
  disabled: PropTypes.string
};
export default Button;
