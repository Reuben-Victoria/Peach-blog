import React, { useState } from 'react';
import styles from './CreatePost.module.scss';
import TagIcon from '../../Common/TagIcons/TagIcon';
import EditIcon from '../../assets/Edit.svg';
import ShowIcon from '../../assets/Show.svg';
import Button from '../../Common/Button/Button';
import Divider from '../../Common/Divider/Divider';

function CreatePost() {
  const [markdown, setMarkdown] = useState('Add post title');

  const handleOnChange = () => {
    setMarkdown();
  };
  return (
    <main className={styles.createPostContainer}>
      <input value={markdown} onChange={handleOnChange} />
      <div className={styles.createPostContainer__icons}>
        <TagIcon src={EditIcon} text={'Write'} />
        <Divider />
        <TagIcon src={ShowIcon} text={'Preview'} />
      </div>
      <textarea></textarea>
      <div>
        <div>
          <Button />
          <Button />
        </div>
        <Button />
      </div>
    </main>
  );
}

export default CreatePost;
