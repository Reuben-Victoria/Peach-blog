import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/HeaderLogo.svg';
// import RequireAuth from '../RequireAuth';
import styles from './Header.module.scss';
// const { userInfo } = useSelector((state) => state.auth);

function Header() {
  // const token = localStorage.getItem('userToken');

  // const displayHeader = () => {
  //   if (token !== null) {
  //     return (
  //       <Link to="/">
  //         <div className={styles.logo}>
  //           <img src={image} alt="Logo" />
  //         </div>
  //       </Link>
  //     );
  //   } else {
  //     return (
  //       <div className={styles.logo}>
  //         <img src={image} alt="Logo" />
  //       </div>
  //     );
  //   }
  // };

  return (
    <header>
      {' '}
      <Link to="/">
        <div className={styles.logo}>
          <img src={image} alt="Logo" />
        </div>
      </Link>
    </header>
  );
}

export default Header;
