import React from 'react';
import image from '../../assets/HeaderLogo.svg';
import styles from './Header.module.scss';

function Header() {
  return (
    <header>
      <div className={styles.logo}>
        <img src={image} alt="Logo" />
      </div>
    </header>
  );
}

export default Header;
