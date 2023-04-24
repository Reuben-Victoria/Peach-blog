import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavBar.module.scss';
import Button from 'common/button/Button';
import editIcon from 'assets/Edit3.svg';
// import { useSelector } from 'react-redux';
import notificationIcon from 'assets/Notification.svg';
import { Link } from 'react-router-dom';

function NavBar({ userId, onClick, toggle, component: ComponentInput, componentProps }) {
  const profile = localStorage.getItem('profilePicture');
  const profilePicture = profile ?? profile;

  const data = JSON.parse(localStorage.getItem('userInfo'));
  return (
    <>
      {toggle ? (
        <nav className={styles.navBar}>
          <h1>Edit Post</h1>
          <div className={styles.navBar__userProfile}>
            <Link to={`/profile/${userId}`}>
              <div className={styles.navBar__userProfile__image}>
                {profilePicture ? (
                  <img src={profilePicture} alt="profile-picture" />
                ) : (
                  <h2>{`${data.user.first_name.charAt(0).toUpperCase()} ${data.user.last_name
                    .charAt(0)
                    .toUpperCase()}`}</h2>
                )}
              </div>
            </Link>
            <div>
              <img src={notificationIcon} alt="notification" />
            </div>
            <Link to="/create-post">
              <Button theme={'lightPink'} size={'sm'} text={'Update'} onClick={onClick} />
            </Link>
          </div>
        </nav>
      ) : (
        <nav className={styles.navBar}>
          {componentProps ? <ComponentInput {...componentProps} /> : null}
          <div className={styles.navBar__userProfile}>
            <Link to={`/profile/${userId}`}>
              <div className={styles.navBar__userProfile__image}>
                {profilePicture ? (
                  <img src={profilePicture} alt="profile-picture" />
                ) : (
                  <h2>{`${data.user.first_name.charAt(0).toUpperCase()} ${data.user.last_name
                    .charAt(0)
                    .toUpperCase()}`}</h2>
                )}
              </div>
            </Link>
            <div className={styles.navBar__userProfile__notification}>
              <img src={notificationIcon} alt="notification" />
            </div>
            <Link to="/create-post">
              <Button
                src={editIcon}
                showImage
                alt={'editIcon'}
                theme={'secondary'}
                size={'md'}
                text={'Write'}
              />
            </Link>
          </div>
        </nav>
      )}
    </>
  );
}
NavBar.propTypes = {
  userId: PropTypes.string,
  toggle: PropTypes.bool,
  dummy: PropTypes.string,
  onClick: PropTypes.func,
  component: PropTypes.elementType,
  componentProps: PropTypes.object
};

export default NavBar;
