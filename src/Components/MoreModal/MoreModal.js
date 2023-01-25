import React from 'react';
import styles from './MoreModal.module.scss';
import Tags from '../Tags/Tags';
import PropTypes from 'prop-types';
import close from '../../assets/close.svg';

const MoreModal = ({ toggle, setToggle }) => {
  return (
    <div className={toggle ? styles.drawer : styles.hideDrawer}>
      <div className={styles.drawer__overlay}></div>
      <div className={styles.drawer__sidebar}>
        <div className={styles.drawer__sidebar__navbar}>
          <Tags />
          <div onClick={() => setToggle(!toggle)}>
            <img src={close} alt="close tag" />
          </div>
        </div>
      </div>
    </div>
  );
};

MoreModal.propTypes = {
  toggle: PropTypes.bool,
  setToggle: PropTypes.func
};
export default MoreModal;
