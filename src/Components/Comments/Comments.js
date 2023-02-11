import Button from 'Common/Button/Button';
import ProfileData from 'Common/ProfileData/ProfileData';
import PropTypes from 'prop-types';
import styles from './Comments.module.scss';

function Comments({
  numberOfComments,
  loggedInUserName,
  loggedInUserPhoto,
  handleSubmit,
  handleChange,
  comment
}) {
  return (
    <div className={styles.commentContainer}>
      <h1>Comments {numberOfComments}</h1>

      <ProfileData src={loggedInUserPhoto} name={loggedInUserName} />
      <form onSubmit={handleSubmit}>
        <input placeholder="Share your thoughts here..." onChange={handleChange} value={comment} />
        <Button text={'Post'} theme={'secondary'} variant={'md'} type={'submit'} />
      </form>
    </div>
  );
}
Comments.propTypes = {
  numberOfComments: PropTypes.string,
  loggedInUserName: PropTypes.string,
  loggedInUserPhoto: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  comment: PropTypes.string
};
export default Comments;
