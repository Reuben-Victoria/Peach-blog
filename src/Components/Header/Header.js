import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/HeaderLogo.svg';
// import RequireAuth from '../RequireAuth';
import styles from './Header.module.scss';

function Header() {
  const token = localStorage.getItem('userToken');
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    if (token) setDisplay(true);
  }, [token]);

  return (
    <header>
      {display ? (
        <Link to="/">
          <div className={styles.logo}>
            <img src={image} alt="Logo" />
          </div>
        </Link>
      ) : (
        <div className={styles.logo}>
          <img src={image} alt="Logo" />
        </div>
      )}
    </header>
  );
}

export default Header;
