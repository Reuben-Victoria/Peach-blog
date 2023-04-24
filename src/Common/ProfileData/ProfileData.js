import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProfileData.module.scss';

function ProfileData({ src, alt, name }) {
  const data = JSON.parse(localStorage.getItem('userInfo'));
  return (
    <div className={styles.userData}>
      <div className={styles.userData__profilePicture}>
        {src ? (
          <img src={src} alt={alt} />
        ) : (
          <h1>{`${data.user.first_name.charAt(0).toUpperCase} ${
            data.user.last_name.charAt(0).toUpperCase
          }`}</h1>
        )}
      </div>
      <p className={styles.userData__userName}>{name}</p>
    </div>
  );
}
export default ProfileData;

ProfileData.propTypes = {
  src: PropTypes.any,
  alt: PropTypes.string,
  name: PropTypes.any
};
