import React from 'react';
import PropTypes from 'prop-types';
// import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';
import styles from './PageLayout.module.scss';

function PageLayout({ children }) {
  return (
    <div className={styles.main}>
      <NavBar />
      <div className={styles.main__page}>{children}</div>
      <Footer />
    </div>
  );
}
export default PageLayout;

PageLayout.propTypes = {
  children: PropTypes.node
};
