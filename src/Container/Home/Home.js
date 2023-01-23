import React, { useEffect } from 'react';
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

function Home({ inputData }) {
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
    // async () => {

    //   // try{
    //   //   const response = await instance.get('/blogs/latest_posts');
    //   // }
    //   // console.log('fhghfhg', response);
    //   // return response;
    // };
  }, [inputData]);

  console.log(posts, 'posts');

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
      </div>
      <div className={styles.homeWrapper__contents}>
        <div className={styles.homeWrapper__contents__posts}>
          <Posts
            onClick={() => {
              dispatch(readOnePost());
            }}
          />
        </div>
        <div className={styles.homeWrapper__contents__divider}></div>
        <Tags />
      </div>
    </div>
  );
}

Home.propTypes = {
  inputData: PropTypes.string
};
export default Home;
