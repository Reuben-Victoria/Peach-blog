import React from 'react';
import bookImage from '../../assets/book.svg';
import dummy from '../../assets/dummy.svg';
import Divider from '../../Common/Divider/Divider';
import TagIcon from '../../Common/TagIcons/TagIcon';
import styles from './Posts.module.scss';
import like from '../../assets/like.svg';
import comment from '../../assets/comment.svg';

function Posts() {
  return (
    <article className={styles.postsContainer}>
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
        <div>
          <div>
            <img src={dummy} alt="authors profile-picture" />
          </div>
          <p>Jessica Hankins</p>
          <Divider />
          <p>Dec 12</p>
          <TagIcon src={like} alt={'heart'} text={'34 likes'} />
          <Divider />
          <TagIcon src={comment} alt={'comment'} text={'4 Comments'} />
          <div>
            
          </div>
        </div>
      </div>
    </article>
  );
}

export default Posts;
