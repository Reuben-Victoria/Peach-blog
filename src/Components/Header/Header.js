import React, { useEffect } from 'react';
import Button from '../../Common/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import image from '../../assets/HeaderLogo.svg';
import styles from './Header.module.scss';
// import instance from '../../api';

function Header() {
  const token = localStorage.getItem('userToken');
  const userInfo = localStorage.getItem('userInfo');
  const navigate = useNavigate();
  function logOut() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userInfo');
    // delete instance.defaults.headers.common['Authorization'];
    navigate('/login');
  }

  useEffect(() => {
    if (token === '' && userInfo === '') {
      navigate('/login');
    }
  }, [token]);
  return (
    <header>
      <Link to="/">
        <div className={styles.logo}>
          <img src={image} alt="Logo" />
        </div>
      </Link>
      {token && <Button theme={'primary'} size={'md'} text={'LogOut'} onClick={() => logOut()} />}
    </header>
  );
}

export default Header;
