import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/HeaderLogo.svg';
// import RequireAuth from '../RequireAuth';
import styles from './Header.module.scss';

function Header() {
  return (
    <header>
      <Link to="/">
        <div className={styles.logo}>
          <img src={image} alt="Logo" />
        </div>
      </Link>
    </header>
  );
}

export default Header;
