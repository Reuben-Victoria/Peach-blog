import React, { useState } from 'react';
import Button from '../../Common/Button/Button';
import ProfileData from '../../Common/ProfileData/ProfileData';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addComment } from '../../Features/posts/postActions';
import styles from './Comments.module.scss';

function Comments({ numberOfComments, loggedInUserName, loggedInUserPhoto }) {
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');
  const handleChange = (e) => {
    setComment(e.target.value);
  };
  const handleSubmit = () => {
    dispatch(addComment(comment));
  };
  return (
    <div className={styles.commentContainer}>
      <h1>Comments {numberOfComments}</h1>
      <ProfileData src={loggedInUserPhoto} name={loggedInUserName} />
      <form onSubmit={handleSubmit}>
        <input placeholder="Share your thoughts here..." onChange={handleChange} value={comment} />
        <Button text={'Post'} theme={'primary'} type={'submit'} />
      </form>
      <div></div>
      <ProfileData />
    </div>
  );
}
Comments.propTypes = {
  numberOfComments: PropTypes.string,
  loggedInUserName: PropTypes.string,
  loggedInUserPhoto: PropTypes.string
};
export default Comments;
