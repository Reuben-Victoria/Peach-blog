import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TableLoader from '../../Components/Loader/Loader';
// import dummy from '../../assets/dummy.svg';
import edit from '../../assets/Edit2.svg';
import post from '../../assets/Document.svg';
import comment from '../../assets/comment.svg';
import repost from '../../assets/repost.svg';
import like from '../../assets/like.svg';
import Divider from '../../Common/Divider/Divider';
import TagIcon from '../../Common/TagIcons/TagIcon';
import styles from './Profile.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { GETPROFILE } from '../../Features/users/usersActions';
import RecentActivity from '../../Components/RecentActivity/RecentActivity';
import { Link } from 'react-router-dom';

function Profile() {
  const { userData, loading } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const userParams = useParams();
  const userId = userParams.id;

  useEffect(() => {
    dispatch(GETPROFILE({ userId }));
    // console.log(userId, 'profileInfo>>>>>>>');
    // console.log(userData.data.user[0], 'DataInfo>>>>>>>');
  }, []);

  // const { userInfo } = userData.data.user[0];
  const { data } = userData;
  const userInfo = data?.user?.[0];
  const comments = data?.comments?.[0];
  const posts = data?.posts?.[0];
  const reposts = data?.reposts?.[0];
  const likes = data?.likes?.[0];
  const recentActivity = data?.recent_activity;
  localStorage.setItem('profilePicture', userInfo?.upload_photo);
  console.log(loading, 'jjjjjj>>>');
  {
    {
      return loading ? (
        <TableLoader />
      ) : (
        <main className={styles.ProfileContainer}>
          <div className={styles.ProfileContainer__userData}>
            <div className={styles.ProfileContainer__userData__profilePicture}>
              <img src={userInfo?.upload_photo} alt="Profile picture" />
            </div>
            <div className={styles.ProfileContainer__userData__data}>
              <div className={styles.ProfileContainer__userData__data__userName}>
                <h1>{`${userInfo?.first_name} ${userInfo?.last_name}`}</h1>
                {userInfo?.id === userId ? (
                  <Link to={`/edit-profile/${userParams.id}`}>
                    <div className={styles.ProfileContainer__userData__data__userName__editIcon}>
                      <TagIcon
                        src={edit}
                        text={'Edit'}
                        size={'sm'}
                        alt={'Edit'}
                        variant={'mdText'}
                      />
                    </div>
                  </Link>
                ) : null}
              </div>
              <p className={styles.ProfileContainer__userData__data__description}>
                {userInfo?.tagline}
              </p>
              <div className={styles.ProfileContainer__userData__data__icons}>
                <TagIcon
                  src={post}
                  text={`${posts?.count} posts created`}
                  variant={'lgText'}
                  size={'sm'}
                  alt={'Posts'}
                />
                <Divider />
                <TagIcon
                  src={like}
                  text={`${likes?.count} posts liked`}
                  variant={'lgText'}
                  size={'sm'}
                  alt={'heart'}
                />
                <Divider />
                <TagIcon
                  src={comment}
                  text={`${comments?.count} comments made`}
                  variant={'lgText'}
                  size={'sm'}
                  alt={'comments'}
                />
                <Divider />
                <TagIcon
                  src={repost}
                  text={`${reposts?.count} reposts made`}
                  variant={'lgText'}
                  size={'sm'}
                  alt={'reposts'}
                />
              </div>
            </div>
          </div>
          <div className={styles.textArea}>{userInfo?.bio}</div>
          <div className={styles.recentActivityContainer}>
            <h1>Recent Activity</h1>
            {recentActivity?.map((activity) => {
              return (
                <RecentActivity
                  key={activity.activity}
                  dateStamp={`${activity.to_char.substring(0, 3)} ${activity.to_char.substring(
                    `${activity.to_char.length - 2}`
                  )}`}
                  title={`${activity.activity.substring(`${activity.activity.indexOf(':') + 1}`)}`}
                />
              );
            })}
          </div>
        </main>
      );
    }
  }
}

export default Profile;
