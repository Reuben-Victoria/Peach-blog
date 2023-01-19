import React, { useState } from 'react';
// import Posts from '../../Components/Posts/Post';
import Tags from '../../Components/Tags/Tags';
import styles from './ViewPost.module.scss';
import MoreFromAuthor from '../MoreFromAuthor/MoreFromAuthor';
import TagIcon from '../../Common/TagIcons/TagIcon';
import Divider from '../../Common/Divider/Divider';
import favouriteFilled from '../../assets/favouriteFilled.svg';
import dummy from '../../assets/dummy.svg';
import comment from '../../assets/comment.svg';
import like from '../../assets/like.svg';
import repost from '../../assets/repost.svg';
import save from '../../assets/save.svg';
import more from '../../assets/more.svg';
import EditPostModal from '../../Components/EditPostModal/EditPostModal';
function ViewPost() {
  const [toggleLike, setToggleLike] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [countLike, setCountLike] = useState(0);

  const handleLike = () => {
    setToggleLike(!toggleLike);
    console.log(toggleLike, 'ToggleLike');
    if (!toggleLike && countLike === 0) {
      setCountLike(countLike + 1);
    } else {
      setCountLike(countLike - 1);
    }
  };
  return (
    <div className={styles.homeWrapper}>
      <div className={styles.homeWrapper__favorites}></div>
      <div className={styles.homeWrapper__contents}>
        <div className={styles.homeWrapper__contents__posts}>
          <div className={styles.homeWrapper__articleData}>
            <div>
              <img src={dummy} alt="profile-picture" />
            </div>
            <div className={styles.homeWrapper____articleData__articleInfo}>
              <h4>Vanessa Reuben</h4>
              <div className={styles.homeWrapper__articleData__articleInfo__data}>
                <TagIcon text={'Posted Nov 10'} variant={'mdText'} />
                <Divider />
                <TagIcon text={'3 min read'} variant={'mdText'} />
              </div>
            </div>
          </div>
          <h1>How Title</h1>
          <div>
            <img />
          </div>
          <p>hdfhfgdgfgddysgygsuhx</p>
          <div className={styles.homeWrapper__contents__posts__tagIconContainer}>
            <div className={styles.homeWrapper__contents__posts__tagIconContainer__tagIcon}>
              <TagIcon
                onClick={handleLike}
                text={`${countLike} likes`}
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
              <button
                className={styles.homeWrapper__contents__posts__tagIconContainer__options__more}
                onClick={() => {
                  setToggle(!toggle);
                  console.log(toggle, 'Toggle');
                }}>
                <img src={more} alt="more" />
              </button>
              <EditPostModal toggle={toggle} />
            </div>
          </div>
          <MoreFromAuthor />
        </div>
        <div className={styles.homeWrapper__contents__divider}></div>
        <Tags />
      </div>
    </div>
  );
}

export default ViewPost;
