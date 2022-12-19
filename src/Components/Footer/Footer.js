import React from 'react';
import img from '../../assets/FooterLogo.svg';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerWrapper__footerLogo}>
        <img src={img} alt="footer logo" />
      </div>
      <div className={styles.footerWrapper__footerText}>
        <p>&copy; 2022 All Rights Reserved</p>
        <div></div>
        Peach
      </div>
    </footer>
  );
}
export default Footer;
