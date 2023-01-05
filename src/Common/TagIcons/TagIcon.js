import React from 'react';
import styles from './TagIcon.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function TagIcon({ src, alt, text, onClick, variant, size }) {
  return (
    <div className={styles.wrapper} onClick={onClick}>
      <div className={classNames(styles.wrapper, styles[`wrapper__${size}`])}>
        <img src={src} alt={alt} />
      </div>
      <p className={classNames(styles.wrapper, styles[`wrapper__${variant}`])}>{text}</p>
    </div>
  );
}

export default TagIcon;
TagIcon.propTypes = {
  src: PropTypes.any,
  alt: PropTypes.string,
  text: PropTypes.any,
  onClick: PropTypes.func,
  variant: PropTypes.string,
  size: PropTypes.string
};
