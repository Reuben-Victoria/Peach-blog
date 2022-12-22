import React from 'react';
import styles from './NavBar.module.scss';
import dummy from '../../assets/dummy.svg';
import Button from '../../Common/Button/Button';
import editIcon from '../../assets/Edit3.svg';
import searchIcon from '../../assets/Search.svg';
import notificationIcon from '../../assets/Notification.svg';
import TagIcon from '../../Common/TagIcons/TagIcon';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navBar__input}>
        <input
          placeholder={
            <TagIcon variant={'placeholderText'} text={'Search posts'} src={searchIcon} />
          }
        />
      </div>
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
