import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Posts from '../../Components/Posts/Post';
import Tags from '../../Components/Tags/Tags';
import { useSelector, useDispatch } from 'react-redux';
// import instance from '../../api';
// import { blogData } from '../../mock/post';
import {
  getAllPosts,
  getMostLikedPost,
  getLatestPost,
  getTopViews,
  readOnePost
} from '../../Features/posts/postActions';

import styles from './Home.module.scss';
import MoreModal from '../../Components/MoreModal/MoreModal';

function Home({ inputData }) {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.post);
  // const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    dispatch(
      getAllPosts({
        params: {
          page: 1,
          per_page: 10,
          search: inputData
        }
      })
    );
  }, [inputData]);

  console.log(posts, 'posts');

  const { data } = posts;

  return (
    <div className={styles.homeWrapper}>
      {loading && <h1>Loading</h1>}
      <div className={styles.homeWrapper__favorites}>
        <p
          onClick={() => {
            dispatch(getLatestPost());
          }}>
          Latest Posts
        </p>
        <p
          onClick={() => {
            dispatch(getTopViews());
          }}>
          Top Views
        </p>
        <p
          onClick={() => {
            dispatch(getMostLikedPost());
          }}>
          Most Liked
        </p>
        <div
          className={styles.homeWrapper__favorites__button}
          onClick={() => {
            setToggle(!toggle);
          }}>
          <span>More...</span>
        </div>
        <MoreModal toggle={toggle} setToggle={setToggle} />
      </div>
      <div className={styles.homeWrapper__contents}>
        <div className={styles.homeWrapper__contents__posts}>
          {data?.map((post) => {
            return (
              <Posts
                key={post.id}
                cover={post.cover}
                title={post.title}
                authorsName={`${post.first_name} ${post.last_name}`}
                noOfComment={post.count}
                postContent={post.post}
                subtitle={post.subtitle}
                noOfLikes={post.post_likes}
                onClick={() => {
                  dispatch(readOnePost(post.id));
                }}
              />
            );
          })}
        </div>
        <div className={styles.homeWrapper__contents__divider}></div>
        <div className={styles.homeWrapper__contents__tags}>
          <Tags />
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {
  inputData: PropTypes.string
};
export default Home;
