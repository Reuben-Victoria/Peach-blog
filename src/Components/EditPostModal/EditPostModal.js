import React from 'react';
import { Link } from 'react-router-dom';
import styles from './EditPostModal.module.scss';
import PropTypes from 'prop-types';

function EditPostModal({ toggleEdit, onClick, postId }) {
  return (
    <div className={toggleEdit ? styles.modalWrapper : styles.display}>
      <div>
        <Link to={`/edit-post/${postId}`}>
          <p>Edit Post</p>
        </Link>
      </div>
      <div>
        <p>Hide Responses</p>
      </div>
      <div onClick={onClick}>
        <p>Delete Post</p>
      </div>
    </div>
  );
}

export default EditPostModal;

EditPostModal.propTypes = {
  toggleEdit: PropTypes.bool,
  setToggle: PropTypes.func,
  onClick: PropTypes.func,
  postId: PropTypes.string
};
