import React from 'react';
import Divider from 'common/divider/Divider';
import TagIcon from 'common/tagIcons/TagIcon';
import styles from './Posts.module.scss';
import like from 'assets/like.svg';
import comment from 'assets/comment.svg';
import save from 'assets/save.svg';
import more from 'assets/more.svg';
import ProfileData from 'common/profileData/ProfileData';
import PropTypes from 'prop-types';
// import ReadTime from 'Components/ReadTime/ReadTime';

const Posts = ({
  onClick,
  cover,
  title,
  subtitle,
  authorsName,
  postContent,
  dateStamp,
  noOfLikes,
  noOfComment,
  upload
  // totalWords
}) => {
  const data = JSON.parse(localStorage.getItem('userInfo'));
  return (
    <article onClick={onClick}>
      <div className={styles.postsContainer}>
        <div className={styles.postsContainer__coverImage}>
          <img src={cover} alt="post cover Image" />
        </div>
        <div className={styles.postsContainer__postContent}>
          <div className={styles.postsContainer__postContent__postTitle}>
            <h1>{title}</h1>
            {/* <ReadTime totalWords={totalWords} /> */}
          </div>
          <p className={styles.postsContainer__postContent__postSubTitle}>{subtitle}</p>
          <p className={styles.postsContainer__postContent__post}>{postContent}</p>
          <div className={styles.postsContainer__postContent__data}>
            <div className={styles.postsContainer__postContent__data__userData}>
              {upload ? (
                <ProfileData src={upload} alt="Authors profile picture" name={authorsName} />
              ) : (
                <h1>{`${data.user.first_name.charAt(0).toUpperCase()} ${data.user.last_name
                  .charAt(0)
                  .toUpperCase()}`}</h1>
              )}
              <Divider />
              <p className={styles.postsContainer__postContent__data__userData__date}>
                {dateStamp}
              </p>
              <Divider />
              <TagIcon src={like} alt={'heart'} text={`${noOfLikes} likes`} size={'sm'} />
              <Divider />
              <TagIcon src={comment} alt={'comment'} text={`${noOfComment} Comments`} size={'sm'} />
            </div>
            <div className={styles.postsContainer__postContent__data__options}>
              <div className={styles.postsContainer__postContent__data__options__save}>
                <img src={save} alt="save for later" />
              </div>
              <div className={styles.postsContainer__postContent__data__options__more}>
                <img src={more} alt="more" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divider}></div>
    </article>
  );
};

Posts.propTypes = {
  onClick: PropTypes.func,
  cover: PropTypes.any,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  authorsName: PropTypes.string,
  postContent: PropTypes.string,
  dateStamp: PropTypes.string,
  noOfLikes: PropTypes.any,
  totalWords: PropTypes.any,
  noOfComment: PropTypes.string,
  upload: PropTypes.string
};
export default Posts;
