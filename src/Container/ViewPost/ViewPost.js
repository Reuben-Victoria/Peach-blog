import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import Posts from '../../Components/Posts/Post';
import TableLoader from '../../Components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { likePost } from '../../Features/posts/postActions';
import Tags from '../../Components/Tags/Tags';
import styles from './ViewPost.module.scss';
import MoreFromAuthor from '../MoreFromAuthor/MoreFromAuthor';
import TagIcon from '../../Common/TagIcons/TagIcon';
import Divider from '../../Common/Divider/Divider';
import favouriteFilled from '../../assets/favouriteFilled.svg';
import comment from '../../assets/comment.svg';
import like from '../../assets/like.svg';
import repostIcon from '../../assets/repost.svg';
import save from '../../assets/save.svg';
import more from '../../assets/more.svg';
import EditPostModal from '../../Components/EditPostModal/EditPostModal';
import DeleteModal from '../../Components/DeleteModal/DeleteModal';
import { deletePost, readOnePost, repost } from '../../Features/posts/postActions';
import { useParams } from 'react-router-dom';
import MoreModal from '../../Components/MoreModal/MoreModal';
import Comments from '../../Components/Comments/Comments';
function ViewPost() {
  const [toggleLike, setToggleLike] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [countLike, setCountLike] = useState(0);
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  const view = posts.data;

  const postParam = useParams();
  const user = JSON.parse(localStorage.getItem('userInfo'));
  console.log(user.user.id, 'USER>>>>>>');
  const postId = postParam.postId;
  console.log(postId);
  console.log(posts);

  const [toggleComments, setToggleComments] = useState(false);

  const handleToggleComments = () => {
    setToggleComments((prevState) => !prevState);
  };

  let likesNum = Number(view?.likes?.[0]?.count) + countLike;
  console.log(likesNum, '>>>>>likesNum');
  const handleLike = () => {
    setToggleLike(true);
    setCountLike(countLike + 1);
    dispatch(likePost({ likesNum, postId }));
    console.log(toggleLike, countLike);
  };

  useEffect(() => {
    dispatch(readOnePost({ postId }));
  }, []);

  return Object.keys(posts?.data ?? {}).length ? (
    <div className={styles.homeWrapper}>
      <div className={styles.homeWrapper__favorites}></div>
      <div className={styles.homeWrapper__contents}>
        <div className={styles.homeWrapper__contents__posts}>
          <div className={styles.homeWrapper__articleData}>
            <div className={styles.homeWrapper__articleData__proImg}>
              <Link to={`/profile/${view?.posts?.[0]?.id}`}>
                {view?.posts && <img src={view.posts?.[0]?.upload_photo} alt="profile-picture" />}
              </Link>
            </div>
            <div className={styles.name}>
              <Link to={`/profile/${view?.posts?.[0]?.id}`}>
                <h4>{`${view?.posts?.[0]?.first_name} ${view?.posts?.[0]?.last_name}`}</h4>
              </Link>
              <div className={styles.homeWrapper__articleData__articleInfo__data}>
                <TagIcon
                  text={`Posted ${view?.posts?.[0]?.to_char.substring(
                    0,
                    3
                  )} ${view?.posts?.[0]?.to_char.substring(
                    `${view?.posts?.[0]?.to_char?.length - 2}`
                  )}`}
                  variant={'mdText'}
                />
                <Divider />
                <TagIcon text={'3 min read'} variant={'mdText'} />
              </div>
            </div>
          </div>
          <h1>{view?.posts?.[0]?.title}</h1>
          <div className={styles.profileImage}>
            <img src={view?.posts?.[0]?.cover} />
          </div>
          <p className={styles.post}>{view?.posts?.[0]?.post}</p>
          <div className={styles.homeWrapper__contents__posts__tagIconContainer}>
            <div className={styles.homeWrapper__contents__posts__tagIconContainer__tagIcon}>
              <TagIcon
                onClick={handleLike}
                text={`${likesNum} likes`}
                variant={'lgText'}
                size={'lg'}
                src={toggleLike ? favouriteFilled : like}
              />
              <Divider />
              <TagIcon
                text={'5 comments'}
                variant={'lgText'}
                size={'lg'}
                src={comment}
                onClick={handleToggleComments}
              />
              {toggleComments && (
                <MoreModal toggle={toggleComments} setToggle={setToggleComments}>
                  <Comments
                    numberOfComments={view?.comments?.[0]?.count}
                    loggedInUserName={`${view?.users?.[0]?.first_name} ${view?.users?.[0]?.last_name}`}
                    loggedInUserPhoto={`${view?.users?.[0]?.upload_photo}`}
                  />
                </MoreModal>
              )}
              <Divider />
              <TagIcon
                text={'20 reposts'}
                variant={'lgText'}
                size={'lg'}
                src={repostIcon}
                onClick={() => {
                  dispatch(repost({}));
                }}
              />
            </div>
            <div className={styles.homeWrapper__contents__posts__tagIconContainer__options}>
              <div className={styles.homeWrapper__contents__posts__tagIconContainer__options__save}>
                <img src={save} alt="save for later" />
              </div>
              <div
                className={styles.homeWrapper__contents__posts__tagIconContainer__options__more}
                onClick={() => {
                  setToggleEdit(!toggleEdit);
                }}
                tabIndex="-1"
                onBlur={() => {
                  setTimeout(() => setToggleEdit(false), 200);
                }}>
                <img src={more} alt="more" />
                {view?.posts?.[0]?.id === user.user.id ? (
                  <EditPostModal
                    toggleEdit={toggleEdit}
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                  />
                ) : null}
              </div>
              <DeleteModal
                toggle={toggle}
                setToggle={setToggle}
                text={'Post'}
                onClick={() => {
                  deletePost();
                }}
              />
            </div>
          </div>
          <MoreFromAuthor
            authorsName={`${view?.posts?.[0]?.first_name} ${view?.posts?.[0]?.last_name} `}
            tagline={view?.posts?.[0]?.tagline}
          />
        </div>
        <div className={styles.homeWrapper__contents__divider}></div>
        <div className={styles.tags}>
          <Tags />
        </div>
      </div>
    </div>
  ) : (
    <TableLoader />
  );
}

ViewPost.propTypes = {
  post: PropTypes.any
};

export default ViewPost;
