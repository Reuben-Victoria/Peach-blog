import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavBar.module.scss';
import dummy from '../../assets/dummy.svg';
import Button from '../../Common/Button/Button';
import editIcon from '../../assets/Edit3.svg';
// import { useSelector } from 'react-redux';
import notificationIcon from '../../assets/Notification.svg';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

function NavBar({ userId, toggle }) {
  return (
    <>
      {toggle ? (
        <nav className={styles.navBar}>
          <h1>Edit Post</h1>
          <div className={styles.navBar__userProfile}>
            <Link to={`/profile/${userId}`}>
              <div>
                <img src={dummy} alt="profile-picture" />
              </div>
            </Link>
            <div>
              <img src={notificationIcon} alt="notification" />
            </div>
            <Link to="/create-post">
              <Button theme={'lightPink'} size={'sm'} text={'Update'} type={'submit'} />
            </Link>
          </div>
        </nav>
      ) : (
        <nav className={styles.navBar}>
          <SearchBar />
          <div className={styles.navBar__userProfile}>
            <Link to={`/profile/${userId}`}>
              <div>
                <img src={dummy} alt="profile-picture" />
              </div>
            </Link>
            <div>
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
  toggle: PropTypes.bool
};

export default NavBar;
