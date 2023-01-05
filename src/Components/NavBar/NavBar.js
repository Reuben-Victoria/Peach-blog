import React from 'react';
import styles from './NavBar.module.scss';
import dummy from '../../assets/dummy.svg';
import Button from '../../Common/Button/Button';
import editIcon from '../../assets/Edit3.svg';
import notificationIcon from '../../assets/Notification.svg';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

function NavBar() {
  return (
    <nav className={styles.navBar}>
      <SearchBar />
      <div className={styles.navBar__userProfile}>
        <Link to="/profile">
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
  );
}

export default NavBar;
