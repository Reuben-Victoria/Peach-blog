import React from 'react';
import Button from '../../Common/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import image from '../../assets/HeaderLogo.svg';
import styles from './Header.module.scss';
// import instance from '../../api';

function Header() {
  const token = localStorage.getItem('userToken');
  let navigate = useNavigate();
  function logOut() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userInfo');
    navigate('/login');

    // delete instance.defaults.headers.common['Authorization'];
  }

  return (
    <header>
      <Link to="/">
        <div className={styles.logo}>
          <img src={image} alt="Logo" />
        </div>
      </Link>
      {token && <Button theme={'primary'} size={'md'} text={'LogOut'} onClick={logOut} />}
    </header>
  );
}

export default Header;
