import React from 'react';
import TagIcon from '../../Common/TagIcons/TagIcon';
import editIcon from '../../assets/Edit2.svg';
import styles from './RecentActivity.module.scss';
import PropTypes from 'prop-types';

function RecentActivity({ dateStamp, title }) {
  return (
    <section className={styles.activityContainer}>
      <p className={styles.activityContainer__dateStamp}>{dateStamp}</p>
      <div className={styles.activityContainer__activity}>
        <TagIcon src={editIcon} text={'Made a post'} size={'sm'} variant={'mdText'} />
        <p className={styles.activityContainer__activity__description}>{title}</p>
        <div className={styles.activityContainer__activity__divider}></div>
      </div>
    </section>
  );
}

RecentActivity.propTypes = {
  dateStamp: PropTypes.string,
  title: PropTypes.string
};
export default RecentActivity;
