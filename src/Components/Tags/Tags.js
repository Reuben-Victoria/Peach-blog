import React, { useEffect } from 'react';
import Button from '../../Common/Button/Button';
import { Link } from 'react-router-dom';
import dummy from '../../assets/dummy.svg';
import styles from './Tags.module.scss';
import ProfileData from '../../Common/ProfileData/ProfileData';
// import { useDispatch, useSelector } from 'react-redux';
import close from '../../assets/close.svg';
// import { getLatestPost } from '../../Features/posts/postActions';

function Tags() {
  // const dispatch = useDispatch();
  // const [toggle, setToggle] = useState(false);
  // const { posts } = useSelector((state) => state.post);
  // const { data } = posts;

  useEffect(() => {
    // dispatch(getLatestPost());
    // console.log(data[0]?.title, 'Top Stories');
  }, []);
  return (
    <div className={styles.publications}>
      <h1>Top Stories</h1>
      <div>
        <ProfileData src={dummy} name={'Jankin Handins'} />
        {/* <h2>{data[0]?.title}</h2> */}
      </div>
      <div>
        <ProfileData src={dummy} name={'Jankin Handins'} />
        <h2>How to earn Money</h2>
      </div>
      <div>
        <ProfileData src={dummy} name={'Jankin Handins'} />
        <h2>How to earn Money</h2>
      </div>
      <p className={styles.publications__list}>View full List</p>
      <div className={styles.publications__faq}>
        <div>
          <h1>Writing on Peach</h1>
          <p>New Writer FAQ</p>
          <p>Writing advice</p>
          <p>Grow your mentorship</p>
          <Link to="/create-post">
            <Button theme={'secondary'} size={'md'} text={'Start Writing'} />
          </Link>
        </div>
        <div>
          <img src={close} alt="close-icon" />
        </div>
      </div>
      <div className={styles.publications__recommended}>
        <h2>Recommended Topics</h2>
        <div className={styles.publications__recommended__buttons}>
          <Button theme={'primary'} size={'smaller'} text={'Programming'} />
          <Button theme={'primary'} size={'smaller'} text={'Data Science'} />
          <Button theme={'primary'} size={'smaller'} text={'Technology'} />
        </div>
        <div className={styles.publications__recommended__buttons}>
          <Button theme={'primary'} size={'smaller'} text={'Self Improvement'} />
          <Button theme={'primary'} size={'smaller'} text={'Writing'} />
          <Button theme={'primary'} size={'smaller'} text={'Relationships'} />
        </div>
        <div className={styles.publications__recommended__buttons}>
          <Button theme={'primary'} size={'smaller'} text={'Machine Learning'} />
          <Button theme={'primary'} size={'smaller'} text={'Productivity'} />
          <Button theme={'primary'} size={'smaller'} text={'Politics'} />
        </div>
      </div>
    </div>
  );
}

export default Tags;
