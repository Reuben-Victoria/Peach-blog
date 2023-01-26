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
import repost from '../../assets/repost.svg';
import save from '../../assets/save.svg';
import more from '../../assets/more.svg';
import EditPostModal from '../../Components/EditPostModal/EditPostModal';
import DeleteModal from '../../Components/DeleteModal/DeleteModal';
import { deletePost } from '../../Features/posts/postActions';
import { readOnePost } from '../../Features/posts/postActions';
import { useParams } from 'react-router-dom';
function ViewPost() {
  const [toggleLike, setToggleLike] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [countLike, setCountLike] = useState(0);
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.post);
  const view = posts.data;

  const postParam = useParams();
  const user = JSON.parse(localStorage.getItem('userInfo'));
  console.log(user.user.id, 'USER>>>>>>');
  const postId = postParam.postId;
  console.log(postId);
  console.log(posts);

  let likesNum = Number(view?.likes?.[0]?.count) + countLike;
  console.log(likesNum, '>>>>>likesNum');
  const handleLike = () => {
    setToggleLike(!toggleLike);

    if (toggleLike) {
      setCountLike(countLike - 1);
      console.log(toggleLike, countLike);
    } else {
      setCountLike(countLike + 1);
      console.log(toggleLike, countLike);
    }
    dispatch(likePost({ likesNum, postId }));
  };

  useEffect(() => {
    dispatch(readOnePost({ postId }));
  }, []);

  return Object.keys(posts?.data ?? {}).length && loading ? (
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
                  )} ${view?.posts[0]?.to_char.substring(
                    `${view?.posts[0]?.to_char?.length - 2}`
                  )}`}
                  variant={'mdText'}
                />
                <Divider />
                <TagIcon text={'3 min read'} variant={'mdText'} />
              </div>
            </div>
          </div>
          <h1>{view?.posts[0]?.title}</h1>
          <div className={styles.profileImage}>
            <img src={view?.posts[0]?.cover} />
          </div>
          <p className={styles.post}>{view?.posts[0]?.post}</p>
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
              <TagIcon text={'5 comments'} variant={'lgText'} size={'lg'} src={comment} />
              <Divider />
              <TagIcon text={'20 reposts'} variant={'lgText'} size={'lg'} src={repost} />
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
