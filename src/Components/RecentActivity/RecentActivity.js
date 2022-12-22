import React from 'react';
import TagIcon from '../../Common/TagIcons/TagIcon';
import editIcon from '../../assets/Edit2.svg';
import styles from './RecentActivity.module.scss';

function RecentActivity() {
  return (
    <section className={styles.activityContainer}>
      <p className={styles.activityContainer__dateStamp}>Dec 12</p>
      <div className={styles.activityContainer__activity}>
        <TagIcon src={editIcon} text={'Made a post'} size={'sm'} variant={'mdText'} />
        <p className={styles.activityContainer__activity__description}>
          The questions everybody&apos;s asking
        </p>
        <div className={styles.activityContainer__activity__divider}></div>
      </div>
    </section>
  );
}
export default RecentActivity;
