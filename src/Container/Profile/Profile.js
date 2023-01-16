import React from 'react';
import dummy from '../../assets/dummy.svg';
import edit from '../../assets/Edit2.svg';
import post from '../../assets/Document.svg';
import comment from '../../assets/comment.svg';
import repost from '../../assets/repost.svg';
import like from '../../assets/like.svg';
import Divider from '../../Common/Divider/Divider';
import TagIcon from '../../Common/TagIcons/TagIcon';
import styles from './Profile.module.scss';
import RecentActivity from '../../Components/RecentActivity/RecentActivity';
import { Link } from 'react-router-dom';

function Profile() {
  // const { userId } = useParams();
  return (
    <main className={styles.ProfileContainer}>
      <div className={styles.ProfileContainer__userData}>
        <div className={styles.ProfileContainer__userData__profilePicture}>
          <img src={dummy} alt="Profile picture" />
        </div>
        <div className={styles.ProfileContainer__userData__data}>
          <div className={styles.ProfileContainer__userData__data__userName}>
            <h1>Vanessa Reuben</h1>
            <Link to="/edit-profile/`${userId}`">
              <div className={styles.ProfileContainer__userData__data__userName__editIcon}>
                <TagIcon src={edit} text={'Edit'} size={'sm'} alt={'Edit'} />
              </div>
            </Link>
          </div>
          <p className={styles.ProfileContainer__userData__data__description}>Writer/Developer</p>
          <div className={styles.ProfileContainer__userData__data__icons}>
            <TagIcon src={post} text={'50 posts created'} size={'sm'} alt={'Posts'} />
            <Divider />
            <TagIcon src={like} text={'posts liked'} size={'sm'} alt={'heart'} />
            <Divider />
            <TagIcon src={comment} text={'5 comments made'} size={'sm'} alt={'comments'} />
            <Divider />
            <TagIcon src={repost} text={'20 reposts made'} size={'sm'} alt={'reposts'} />
          </div>
        </div>
      </div>
      <div className={styles.textArea}></div>
      <div className={styles.recentActivityContainer}>
        <h1>Recent Activity</h1>
        <RecentActivity />
      </div>
    </main>
  );
}

export default Profile;
