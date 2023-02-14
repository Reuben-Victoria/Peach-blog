import React, { useLayoutEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Posts from 'Components/Posts/Post';
import Tags from 'Components/Tags/Tags';
import { useDebounce } from 'Hooks/debounce';
import SearchBar from 'Components/SearchBar/SearchBar';
import { useSelector, useDispatch } from 'react-redux';
import {
  // getAllPosts,
  getMostLikedPost,
  getLatestPost,
  getTopViews,
  readOnePost
} from 'Features/posts/postActions';
import PageLoader from 'Components/PageLoader/PageLoader';
import styles from './Home.module.scss';
import MoreModal from 'Components/MoreModal/MoreModal';
import TableLoader from 'Components/Loader/Loader';
import PostsNotFound from 'Container/PostsNotFound/PostsNotFound';
import PageLayout from 'Layouts/PageLayout';

function Home() {
  const [toggle, setToggle] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputData = useDebounce(inputValue, 1000);
  // const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loader = useRef(null);
  const { posts, loading } = useSelector((state) => state.post);
  // const userInfoData = JSON.parse(localStorage.getItem('userInfo'));
  // const photo = userInfoData.user.upload_photo;
  // localStorage.setItem('profilePicture', photo);
  // const [pageNumber, setPageNumber] = useState(1);

  // const handleObserver = useCallback((entries) => {
  //   const target = entries[0];
  //   console.log(entries, 'Entries>>>>');
  //   if (target.isIntersecting) {
  //     setPage((prev) => prev + 1);
  //   }
  // }, []);

  // const option = {
  //   root: null,
  //   rootMargin: '20px',
  //   threshold: 0
  // };

  useLayoutEffect(() => {
    dispatch(
      // getAllPosts({
      //   params: {
      //     page: page,
      //     search: inputData
      //   }
      // })
      getLatestPost()
    );
    // const observer = new IntersectionObserver(handleObserver, option);
    // if (loader.current) observer.observe(loader.current);
  }, []);

  console.log({ posts }, '>>>>');

  // console.log(handleObserver, 'HandleObserver>>>>>');

  const { data } = posts;
  console.log(inputData);
  return (
    <PageLayout
      component={SearchBar}
      componentProps={{
        value: inputValue,
        onChange: (e) => setInputValue(e.target.value)
      }}>
      {loading ? (
        <TableLoader />
      ) : Object.keys(posts?.data ?? {}).length ? (
        <div className={styles.homeWrapper}>
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
            <MoreModal toggle={toggle} setToggle={setToggle}>
              <Tags />
            </MoreModal>
          </div>
          <div className={styles.homeWrapper__contents}>
            <div className={styles.homeWrapper__contents__posts}>
              {(data ?? [])?.map((post) => {
                return (
                  <Posts
                    key={post.id}
                    cover={post.cover}
                    title={post.title}
                    // totalWords={Object.values(JSON.parse(post.post))}
                    upload={post.upload_photo}
                    authorsName={`${post.first_name} ${post.last_name}`}
                    noOfComment={post.count}
                    dateStamp={`${post.to_char.substring(0, 3)} ${post.to_char.substring(
                      `${post.to_char.length - 2}`
                    )}`}
                    postContent={post.post.substring(0, 100)}
                    subtitle={post.subtitle}
                    noOfLikes={post.post_likes}
                    onClick={() => {
                      dispatch(readOnePost(post.id));
                      navigate(`/view-post/${post.id}`);
                      navigate(0);
                    }}
                  />
                );
              })}
            </div>
            <div className={styles.homeWrapper__contents__posts}>
              {inputData.length !== 0 &&
                (data ?? [])?.map((post) => {
                  return (
                    <Posts
                      key={post.id}
                      cover={post.cover}
                      title={post.title}
                      totalWords={post.post}
                      upload={post.upload_photo}
                      authorsName={`${post.first_name} ${post.last_name}`}
                      noOfComment={post.count}
                      dateStamp={`${post.to_char.substring(0, 3)} ${post.to_char.substring(
                        `${post.to_char.length - 2}`
                      )}`}
                      postContent={post.post.substring(0, 100)}
                      subtitle={post.subtitle}
                      noOfLikes={post.post_likes}
                      onClick={() => {
                        dispatch(readOnePost(post.id));
                        navigate(`/view-post/${post.id}`);
                        navigate(0);
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
          <div ref={loader}>
            <PageLoader />
          </div>
        </div>
      ) : (
        <PostsNotFound />
      )}
    </PageLayout>
  );
}

Home.propTypes = {
  inputData: PropTypes.string
};
export default Home;
