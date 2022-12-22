import React from 'react';
import bookImage from '../../assets/book.svg';
import dummy from '../../assets/dummy.svg';
import Divider from '../../Common/Divider/Divider';
import TagIcon from '../../Common/TagIcons/TagIcon';
import styles from './Posts.module.scss';
import like from '../../assets/like.svg';
import comment from '../../assets/comment.svg';
import save from '../../assets/save.svg';
import more from '../../assets/more.svg';
import ProfileData from '../../Common/ProfileData/ProfileData';

function Posts() {
  return (
    <article>
      <div className={styles.postsContainer}>
        <div className={styles.postsContainer__coverImage}>
          <img src={bookImage} alt="post cover Image" />
        </div>
        <div className={styles.postsContainer__postContent}>
          <div className={styles.postsContainer__postContent__postTitle}>
            <h1>How to handle Tech Hassles</h1>
            <p>2 min read</p>
          </div>
          <p className={styles.postsContainer__postContent__postSubTitle}>Ux Blogging</p>
          <p className={styles.postsContainer__postContent__post}>
            Recently wondered if spending 8 hours a day answering surveys was a viable way to live.
            So, in order to accomplish this, I had to create a fictitious persona; let’s be honest,
            there was no way.
          </p>
          <div className={styles.postsContainer__postContent__data}>
            <div className={styles.postsContainer__postContent__data__userData}>
              <ProfileData src={dummy} alt="Authors profile picture" name={'Jessica Hankins'} />
              <Divider />
              <p className={styles.postsContainer__postContent__data__userData__date}>Dec 12</p>
              <Divider />
              <TagIcon src={like} alt={'heart'} text={'34 likes'} size={'sm'} />
              <Divider />
              <TagIcon src={comment} alt={'comment'} text={'4 Comments'} size={'sm'} />
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
}

export default Posts;
