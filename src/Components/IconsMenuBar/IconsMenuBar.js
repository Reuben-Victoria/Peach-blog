import React from 'react';
import styles from './IconsMenuBar.module.scss';
import bold from '../../assets/bold.svg';
import italic from '../../assets/Italic.svg';
import iconDivider from '../../assets/IconDivider.svg';
import underline from '../../assets/underline.svg';
import textMore from '../../assets/textMore.svg';
import alignLeft from '../../assets/alignLeft.svg';
import alignCenter from '../../assets/alignCenter.svg';
import orderedList from '../../assets/orderedList.svg';
import paragraphMore from '../../assets/paragraphMore.svg';
import insertLink from '../../assets/insertLink.svg';
import smile from '../../assets/smile.svg';

function IconsMenuBar() {
  return (
    <div className={styles.IconsMenuBarContainer}>
      <div className={styles.IconsMenuBarContainer__icons}>
        <img src={bold} alt="BoldFace" />
      </div>
      <div className={styles.IconsMenuBarContainer__divider}>
        <img src={iconDivider} alt="icon Divider" />
      </div>
      <div className={styles.IconsMenuBarContainer__italic}>
        <img src={italic} alt="Italic" />
      </div>
      <div className={styles.IconsMenuBarContainer__divider}>
        <img src={iconDivider} alt="icon Divider" />
      </div>
      <div className={styles.IconsMenuBarContainer__icons}>
        <img src={underline} alt="Underline" />
      </div>
      <div className={styles.IconsMenuBarContainer__divider}>
        <img src={iconDivider} alt="icon Divider" />
      </div>
      <div className={styles.IconsMenuBarContainer__icons}>
        <img src={textMore} alt="TextMore" />
      </div>
      <div className={styles.IconsMenuBarContainer__divider}>
        <img src={iconDivider} alt="icon Divider" />
      </div>
      <div className={styles.IconsMenuBarContainer__icons}>
        <img src={alignLeft} alt="Align Left" />
      </div>
      <div className={styles.IconsMenuBarContainer__icons}>
        <img src={alignCenter} alt="Align Center" />
      </div>
      <div className={styles.IconsMenuBarContainer__icons}>
        <img src={orderedList} alt="Ordered List" />
      </div>
      <div className={styles.IconsMenuBarContainer__icons}>
        <img src={paragraphMore} alt="Paragraph More" />
      </div>
      <div className={styles.IconsMenuBarContainer__divider}>
        <img src={iconDivider} alt="icon Divider" />
      </div>
      <div className={styles.IconsMenuBarContainer__icons}>
        <img src={insertLink} alt="insert Link" />
      </div>
      <div className={styles.IconsMenuBarContainer__icons}>
        <img src={smile} alt="Emoji" />
      </div>
    </div>
  );
}
export default IconsMenuBar;
