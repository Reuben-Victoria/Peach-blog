import React from 'react';
// import bookImage from '../../assets/book.svg';
import Divider from '../../Common/Divider/Divider';
import TagIcon from '../../Common/TagIcons/TagIcon';
import styles from './Posts.module.scss';
import like from '../../assets/like.svg';
import comment from '../../assets/comment.svg';
import save from '../../assets/save.svg';
import more from '../../assets/more.svg';
import ProfileData from '../../Common/ProfileData/ProfileData';
import PropTypes from 'prop-types';
import { blogData } from '../../mock/post';

const Posts = ({ onClick }) => {
  console.log(blogData, '>>>>>>');
  return (
    <article>
      {blogData.map((item, index) => {
        return (
          <div className={styles.postsContainer} key={index}>
            <div className={styles.postsContainer__coverImage}>
              <img src={item.cover} alt="post cover Image" />
            </div>
            <div className={styles.postsContainer__postContent}>
              <div className={styles.postsContainer__postContent__postTitle}>
                <h1>{item.title}</h1>
                <p>2 min read</p>
              </div>
              <p className={styles.postsContainer__postContent__postSubTitle}>{item.subTitle}</p>
              <p className={styles.postsContainer__postContent__post}>{item.postContent}</p>
              <div className={styles.postsContainer__postContent__data}>
                <div className={styles.postsContainer__postContent__data__userData}>
                  <ProfileData
                    src={item.cover}
                    alt="Authors profile picture"
                    name={item.authorsName}
                  />
                  <Divider />
                  <p className={styles.postsContainer__postContent__data__userData__date}>
                    {item.dateStamp}
                  </p>
                  <Divider />
                  <TagIcon src={like} alt={'heart'} text={`${item.noOfLikes} likes`} size={'sm'} />
                  <Divider />
                  <TagIcon
                    src={comment}
                    alt={'comment'}
                    text={`${item.noOfComment} Comments`}
                    size={'sm'}
                  />
                </div>
                <div className={styles.postsContainer__postContent__data__options}>
                  <div
                    className={styles.postsContainer__postContent__data__options__save}
                    onClick={onClick}>
                    <img src={save} alt="save for later" />
                  </div>
                  <div className={styles.postsContainer__postContent__data__options__more}>
                    <img src={more} alt="more" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className={styles.divider}></div>
    </article>
  );
};

Posts.propTypes = {
  onClick: PropTypes.func
};
export default Posts;
