import styles from './ReadTime.module.scss';
import classnames from 'classnames';
import PropTypes from 'prop-types';

function ReadTime({ totalWords, variant }) {
  const calculateReadTime = () => {
    let numberOfWords = 0;
    const averageWPM = 265;
    totalWords.forEach((post) => {
      numberOfWords += post.split('').length;
    });
    let readTime = numberOfWords / averageWPM;
    console.log(readTime, '>>>>hhhhh');
    return Math.round(readTime);
  };
  return (
    <p className={classnames(styles.readTime, styles[`readTime__${variant}`])}>
      {calculateReadTime()} min read
    </p>
  );
}

export default ReadTime;
ReadTime.propTypes = {
  totalWords: PropTypes.any,
  variant: PropTypes.string
};
