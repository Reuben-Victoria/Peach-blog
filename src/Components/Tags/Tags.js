import React, { useState } from 'react';
import Button from '../../Common/Button/Button';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { readOnePost } from '../../Features/posts/postActions';
// import dummy from '../../assets/dummy.svg';
import styles from './Tags.module.scss';
import ProfileData from '../../Common/ProfileData/ProfileData';
import close from '../../assets/close.svg';

function Tags() {
  const [toggleList, setToggleList] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const latestPost = JSON.parse(localStorage.getItem('LatestPost'));

  const initialList = latestPost?.data?.slice(0, 3);

  const handleToggleViewList = () => {
    setToggleList((prevState) => !prevState);
  };

  return (
    <div className={styles.publications}>
      <h1>Top Stories</h1>
      {toggleList
        ? (latestPost?.data ?? [])?.map((list) => {
            return (
              <div
                key={list.id}
                onClick={() => {
                  dispatch(readOnePost(list.id));
                  navigate(`/view-post/${list.id}`);
                }}>
                <ProfileData
                  src={list.upload_photo}
                  name={`${list.first_name} ${list.last_name}`}
                />
                <h2>{list.title}</h2>
              </div>
            );
          })
        : (initialList ?? [])?.map((list) => {
            return (
              <div
                onClick={() => {
                  dispatch(readOnePost(list.id));
                  navigate(`/view-post/${list.id}`);
                }}
                key={list.id}>
                <ProfileData
                  src={list.upload_photo}
                  name={`${list.first_name} ${list.last_name}`}
                />
                <h2>{list.title}</h2>
              </div>
            );
          })}
      <p
        className={toggleList ? styles.hideList : styles.publications__list}
        onClick={handleToggleViewList}>
        View full List
      </p>
      <div className={styles.publications__faq}>
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
      <div className={styles.publications__recommended}>
        <h2>Recommended Topics</h2>
        <div className={styles.publications__recommended__buttons}>
          <Button theme={'primary'} size={'smaller'} text={'Programming'} />
          <Button theme={'primary'} size={'smaller'} text={'Data Science'} />
          <Button theme={'primary'} size={'smaller'} text={'Technology'} />
        </div>
        <div className={styles.publications__recommended__buttons}>
          <Button theme={'primary'} size={'smaller'} text={'Self Improvement'} />
          <Button theme={'primary'} size={'smaller'} text={'Writing'} />
          <Button theme={'primary'} size={'smaller'} text={'Relationships'} />
        </div>
        <div className={styles.publications__recommended__buttons}>
          <Button theme={'primary'} size={'smaller'} text={'Machine Learning'} />
          <Button theme={'primary'} size={'smaller'} text={'Productivity'} />
          <Button theme={'primary'} size={'smaller'} text={'Politics'} />
        </div>
      </div>
    </div>
  );
}

export default Tags;
