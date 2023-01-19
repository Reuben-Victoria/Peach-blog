import React from 'react';
import { Link } from 'react-router-dom';
import styles from './EditPostModal.module.scss';
import PropTypes from 'prop-types';

function EditPostModal({ toggle }) {
  return (
    <div className={toggle ? styles.modalWrapper : styles.display}>
      <div>
        <Link to="">
          <p>Edit Post</p>
        </Link>
      </div>
      <div>
        <p>Hide Responses</p>
      </div>
      <div>
        <p>Delete Post</p>
      </div>
    </div>
  );
}

export default EditPostModal;

EditPostModal.propTypes = {
  toggle: PropTypes.bool,
  setToggle: PropTypes.func
};
