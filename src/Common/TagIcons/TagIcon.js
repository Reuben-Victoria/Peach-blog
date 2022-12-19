import React from 'react';
import styles from './TagIcon.module.scss';
import PropTypes from 'prop-types';

function TagIcon({ src, alt, text, onClick }) {
  return (
    <div className={styles.wrapper} onClick={onClick}>
      <div className={styles.wrapper__icon}>
        <img src={src} alt={alt} />
      </div>
      <p className={styles.wrapper__description}>{text}</p>
    </div>
  );
}

export default TagIcon;
TagIcon.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func
};
