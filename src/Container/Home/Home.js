import React from 'react';
import ProfileData from '../../Common/ProfileData/ProfileData';
import Posts from '../../Components/Posts/Post';
import dummy from '../../assets/dummy.svg';
import close from '../../assets/close.svg';
import Button from '../../Common/Button/Button';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className={styles.homeWrapper}>
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
        <div className={styles.homeWrapper__contents__publications}>
          <h1>Top Stories</h1>
          <div>
            <ProfileData src={dummy} name={'Jankin Handins'} />
            <h2>How to earn Money</h2>
          </div>
          <div>
            <ProfileData src={dummy} name={'Jankin Handins'} />
            <h2>How to earn Money</h2>
          </div>
          <div>
            <ProfileData src={dummy} name={'Jankin Handins'} />
            <h2>How to earn Money</h2>
          </div>
          <p className={styles.homeWrapper__contents__publications__list}>View full List</p>
          <div className={styles.homeWrapper__contents__publications__faq}>
            <div>
              <h1>Writing on Peach</h1>
              <p>New Writer FAQ</p>
              <p>Writing advice</p>
              <p>Grow your mentorship</p>
              <Link to="/create-post">
                <Button theme={'secondary'} size={'md'} text={'Start Writing'} />
              </Link>
            </div>
            <div>
              <img src={close} alt="close-icon" />
            </div>
          </div>
          <div className={styles.homeWrapper__contents__publications__recommended}>
            <h2>Recommended Topics</h2>
            <div className={styles.homeWrapper__contents__publications__recommended__buttons}>
              <Button theme={'primary'} size={'smaller'} text={'Programming'} />
              <Button theme={'primary'} size={'smaller'} text={'Data Science'} />
              <Button theme={'primary'} size={'smaller'} text={'Technology'} />
            </div>
            <div className={styles.homeWrapper__contents__publications__recommended__buttons}>
              <Button theme={'primary'} size={'smaller'} text={'Self Improvement'} />
              <Button theme={'primary'} size={'smaller'} text={'Writing'} />
              <Button theme={'primary'} size={'smaller'} text={'Relationships'} />
            </div>
            <div className={styles.homeWrapper__contents__publications__recommended__buttons}>
              <Button theme={'primary'} size={'smaller'} text={'Machine Learning'} />
              <Button theme={'primary'} size={'smaller'} text={'Productivity'} />
              <Button theme={'primary'} size={'smaller'} text={'Politics'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
