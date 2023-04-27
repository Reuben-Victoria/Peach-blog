import React, { useState, useEffect, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

import TableLoader from 'components/loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Tags from 'components/tags/Tags';
import styles from './ViewPost.module.scss';
// import MoreFromAuthor from '../moreFromAuthor/MoreFromAuthor';
import TagIcon from 'common/tagIcons/TagIcon';
import Divider from 'common/divider/Divider';
import favouriteFilled from 'assets/favouriteFilled.svg';
import commentIcon from 'assets/comment.svg';
import like from 'assets/like.svg';
import repostIcon from 'assets/repost.svg';
import save from 'assets/save.svg';
import more from 'assets/more.svg';
import EditPostModal from 'components/editPostModal/EditPostModal';
import DeleteModal from 'components/deleteModal/DeleteModal';
import { deletePost, readOnePost, repost, likePost, addComment } from 'features/posts/postActions';
import { useParams } from 'react-router-dom';
import MoreModal from 'components/moreModal/MoreModal';
import Comments from 'components/comments/Comments';
function ViewPost() {
  const [toggleLike, setToggleLike] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [countLike, setCountLike] = useState(0);
  const [countComment, setCountComment] = useState(0);
  const [countReposts, setCountRepost] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { posts } = useSelector((state) => state.post);
  const view = posts?.data;

  const postParam = useParams();
  const user = JSON.parse(localStorage.getItem('userInfo'));
  const postId = postParam.postId;

  const [toggleComments, setToggleComments] = useState(false);
  const [comment, setComment] = useState('');

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addComment({ comment, postId }));
    setCountComment(countComment + 1);
  };

  const handleToggleComments = () => {
    setToggleComments((prevState) => !prevState);
  };

  let likesNum = Number(view?.likes?.[0]?.count) + countLike;
  let commentNum = Number(view?.comments?.[0]?.count) + countComment;
  let repostNum = Number(view?.reposts?.[0]?.count) + countReposts;
  const handleLike = (e) => {
    e.preventDefault();
    setToggleLike(true);
    setCountLike(countLike + 1);
    localStorage.setItem('like', toggleLike);
    dispatch(likePost({ likesNum, postId }));
  };
  const getToggle = localStorage.getItem('like');
  useEffect(() => {
    dispatch(readOnePost({ postId }));
  }, []);

  useLayoutEffect(() => {
    if (posts?.status === 'Success') {
      navigate('/');
    }
  }, [posts?.status]);

  return Object.keys(posts?.data ?? {}).length ? (
    <div className={styles.homeWrapper}>
      <div className={styles.homeWrapper__favorites}></div>
      <div className={styles.homeWrapper__contents}>
        <div className={styles.homeWrapper__contents__posts}>
          <div className={styles.homeWrapper__articleData}>
            <div className={styles.homeWrapper__articleData__proImg}>
              <Link to={`/profile/${view?.posts?.[0]?.id}`}>
                {view?.posts?.[0]?.upload_photo ? (
                  <img src={view.posts?.[0]?.upload_photo} alt="profile-picture" />
                ) : (
                  <h2>{`${view?.posts?.[0]?.first_name
                    .charAt(0)
                    .toUpperCase()} ${view?.posts?.[0]?.last_name.charAt(0).toUpperCase()}`}</h2>
                )}
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
          {/* <div className={styles.post}>
            {JSON.parse(view?.posts?.[0].post)?.map((post) => {
              const contentState = convertFromRaw(post.post);
              const editorState = EditorState.createWithContent(contentState);
              return <Editor editorState={editorState} key={post.post} readOnly={true} />;
            })}
          </div> */}
          <p className={styles.post}>{view?.posts?.[0]?.post}</p>
          <div className={styles.homeWrapper__contents__posts__tagIconContainer}>
            <div className={styles.homeWrapper__contents__posts__tagIconContainer__tagIcon}>
              <TagIcon
                onClick={handleLike}
                text={`${likesNum} likes`}
                variant={'lgText'}
                size={'lg'}
                src={getToggle ? favouriteFilled : like}
              />
              <Divider />
              <TagIcon
                text={`${commentNum} comments`}
                variant={'lgText'}
                size={'lg'}
                src={commentIcon}
                onClick={handleToggleComments}
              />
              {toggleComments && (
                <MoreModal toggle={toggleComments} setToggle={setToggleComments}>
                  <Comments
                    numberOfComments={commentNum}
                    loggedInUserName={`${view?.users?.[0]?.first_name} ${view?.users?.[0]?.last_name}`}
                    loggedInUserPhoto={`${view?.users?.[0]?.upload_photo}`}
                    comment={comment}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                  />
                </MoreModal>
              )}
              <Divider />
              <TagIcon
                text={`${repostNum} reposts`}
                variant={'lgText'}
                size={'lg'}
                src={repostIcon}
                onClick={() => {
                  dispatch(repost({ postId }));
                  setCountRepost(countReposts + 1);
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
                    postId={postId}
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
                  dispatch(deletePost({ postId }));
                }}
              />
            </div>
          </div>
          {/* <MoreFromAuthor
            authorsName={`${view?.posts?.[0]?.first_name} ${view?.posts?.[0]?.last_name} `}
            tagline={view?.posts?.[0]?.tagline}
          /> */}
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
