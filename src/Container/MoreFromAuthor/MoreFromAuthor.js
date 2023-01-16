import React from 'react';
import Posts from '../../Components/Posts/Post';
import styles from './MoreFromAuthor.module.scss';

function MoreFromAuthor() {
  return (
    <div className={styles.moreFromAuthor}>
      <h1 className={styles.moreFromAuthor__header}>More From Vanessa Reuben</h1>
      <p className={styles.moreFromAuthor__description}>Writer/Developer</p>
      <Posts />
    </div>
  );
}

export default MoreFromAuthor;
