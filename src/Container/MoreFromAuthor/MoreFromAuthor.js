import React from 'react';
import styles from './MoreFromAuthor.module.scss';
import Divider from 'common/divider/Divider';
import TagIcon from 'common/tagIcons/TagIcon';
import like from 'assets/like.svg';
import comment from 'assets/comment.svg';
import save from 'assets/save.svg';
import more from 'assets/more.svg';
import PropTypes from 'prop-types';

function MoreFromAuthor({
  authorsName,
  tagline,
  cover,
  title,
  readTime,
  subtitle,
  dateStamp,
  postContent,
  noOfLikes,
  noOfComments
}) {
  return (
    <div className={styles.moreFromAuthor}>
      <h1 className={styles.moreFromAuthor__header}>More From {authorsName}</h1>
      <p className={styles.moreFromAuthor__description}>{tagline}</p>
      <div className={styles.postsContainer}>
        <div className={styles.postsContainer__coverImage}>
          <img src={cover} alt="post cover Image" />
        </div>
        <div className={styles.postsContainer__postContent}>
          <div className={styles.postsContainer__postContent__postTitle}>
            <h1>{title}</h1>
            <p>{`${readTime} min read`}</p>
          </div>
          <p className={styles.postsContainer__postContent__postSubTitle}>{subtitle}</p>
          <p className={styles.postsContainer__postContent__post}>{postContent}</p>
          <div className={styles.postsContainer__postContent__data}>
            <div className={styles.postsContainer__postContent__data__userData}>
              <p className={styles.postsContainer__postContent__data__userData__date}>
                {dateStamp}
              </p>
              <Divider />
              <TagIcon src={like} alt={'heart'} text={`${noOfLikes} likes`} size={'sm'} />
              <Divider />
              <TagIcon
                src={comment}
                alt={`${noOfComments} comment`}
                text={`Comments`}
                size={'sm'}
              />
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
    </div>
  );
}

MoreFromAuthor.propTypes = {
  authorsName: PropTypes.string,
  cover: PropTypes.string,
  tagline: PropTypes.string,
  title: PropTypes.string,
  readTime: PropTypes.string,
  subtitle: PropTypes.string,
  dateStamp: PropTypes.string,
  postContent: PropTypes.string,
  noOfLikes: PropTypes.string,
  noOfComments: PropTypes.string
};
export default MoreFromAuthor;
