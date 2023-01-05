import React from 'react';
import Posts from '../../Components/Posts/Post';
import Tags from '../../Components/Tags/Tags';
// import { blogData } from '../../mock/post';

import styles from './Home.module.scss';

function Home() {
  return (
    <div className={styles.homeWrapper}>
      <div className={styles.homeWrapper__favorites}>
        <p>Latest Posts</p>
        <p>Top Views</p>
        <p>Most Liked</p>
      </div>
      <div className={styles.homeWrapper__contents}>
        <div className={styles.homeWrapper__contents__posts}>
          <Posts />
        </div>
        <div className={styles.homeWrapper__contents__divider}></div>
        <Tags />
      </div>
    </div>
  );
}
export default Home;
