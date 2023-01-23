import React from 'react';
import PropTypes from 'prop-types';
// import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';
import styles from './PageLayout.module.scss';

function PageLayout({ children, toggle, component, componentProps }) {
  const authData = JSON.parse(localStorage.getItem('userInfo'));
  console.log(authData.user.id);
  return (
    <div className={styles.main}>
      <NavBar
        userId={authData.user.id}
        toggle={toggle}
        component={component}
        componentProps={componentProps}
      />
      <div className={styles.main__page}>{children}</div>
      <Footer />
    </div>
  );
}
export default PageLayout;

PageLayout.propTypes = {
  children: PropTypes.node,
  toggle: PropTypes.bool,
  component: PropTypes.elementType,
  componentProps: PropTypes.object
};
