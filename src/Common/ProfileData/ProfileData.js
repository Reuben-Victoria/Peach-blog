import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProfileData.module.scss';

function ProfileData({ src, alt, name }) {
  return (
    <div className={styles.userData}>
      <div className={styles.userData__profilePicture}>
        <img src={src} alt={alt} />
      </div>
      <p className={styles.userData__userName}>{name}</p>
    </div>
  );
}
export default ProfileData;

ProfileData.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  name: PropTypes.string
};
