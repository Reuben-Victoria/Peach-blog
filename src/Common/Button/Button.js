import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Button.module.scss';

function Button({ text, theme, size, variant }) {
  return (
    <button
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
  variant: PropTypes.string
};
export default Button;
