import React from 'react';
import cover from '../../assets/cover.svg';
import styles from './EditPost.module.scss';

function EditPost() {
  return (
    <div className={styles.editPostWrapper}>
      <h1>How to handle Tech Hassels</h1>
      <div className={styles.editPostWrapper__image}>
        <img src={cover} alt="cover Image" />
      </div>
      <div className={styles.editPostWrapper__text}>
        <p>fffv</p>
      </div>
    </div>
  );
}

export default EditPost;
