import React, { useEffect } from 'react';
import Posts from '../../Components/Posts/Post';
import Tags from '../../Components/Tags/Tags';
import { useSelector, useDispatch } from 'react-redux';
// import { blogData } from '../../mock/post';
import { getLatestPost } from '../../Features/posts/postActions';

import styles from './Home.module.scss';

function Home() {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(getLatestPost());
    console.log(posts, 'posts');
  }, []);
  return (
    <div className={styles.homeWrapper}>
      {loading && <h1>Loading</h1>}
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
