import React from 'react';
import styles from './MoreFromAuthor.module.scss';
import Divider from '../../Common/Divider/Divider';
import TagIcon from '../../Common/TagIcons/TagIcon';
import like from '../../assets/like.svg';
// import cover from '../../assets/cover.svg';
import comment from '../../assets/comment.svg';
import save from '../../assets/save.svg';
import more from '../../assets/more.svg';
import PropTypes from 'prop-types';

function MoreFromAuthor({ post }) {
  return (
    <div className={styles.moreFromAuthor}>
      <h1 className={styles.moreFromAuthor__header}>More From `${}`</h1>
      <p className={styles.moreFromAuthor__description}>Writer/Developer</p>
      <div className={styles.postsContainer}>
        <div className={styles.postsContainer__coverImage}>
          <img src={post.cover} alt="post cover Image" />
        </div>
        <div className={styles.postsContainer__postContent}>
          <div className={styles.postsContainer__postContent__postTitle}>
            <h1>title</h1>
            <p>2 min read</p>
          </div>
          <p className={styles.postsContainer__postContent__postSubTitle}>subtitle</p>
          <p className={styles.postsContainer__postContent__post}>postContent</p>
          <div className={styles.postsContainer__postContent__data}>
            <div className={styles.postsContainer__postContent__data__userData}>
              <p className={styles.postsContainer__postContent__data__userData__date}>DateStamp</p>
              <Divider />
              <TagIcon src={like} alt={'heart'} text={` likes`} size={'sm'} />
              <Divider />
              <TagIcon src={comment} alt={'comment'} text={`Comments`} size={'sm'} />
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
  post: PropTypes.any
};
export default MoreFromAuthor;
