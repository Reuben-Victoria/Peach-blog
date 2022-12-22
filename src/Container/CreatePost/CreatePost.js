import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import PropTypes from 'prop-types';
import styles from './CreatePost.module.scss';
import TagIcon from '../../Common/TagIcons/TagIcon';
import EditIcon from '../../assets/Edit.svg';
import ShowIcon from '../../assets/Show.svg';
import Button from '../../Common/Button/Button';
import Divider from '../../Common/Divider/Divider';
import Tvector from '../../assets/TVector.svg';
import cover from '../../assets/cover.svg';
import IconsMenuBar from '../../Components/IconsMenuBar/IconsMenuBar';

function CreatePost() {
  const [markdownInputs, setMarkdownValues] = useState({
    title: 'Add post title...',
    post: 'Write your post...'
  });

  const [preview, setPreview] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setMarkdownValues({ ...markdownInputs, [name]: value });
  }

  return (
    <main className={styles.createPostContainer}>
      <div className={styles.createPostContainer__icons}>
        <TagIcon
          src={EditIcon}
          text={'Write'}
          size={'lg'}
          variant={'lgText'}
          onClick={() => setPreview(false)}
        />
        <Divider />
        <TagIcon
          src={ShowIcon}
          text={'Preview'}
          size={'lg'}
          variant={'lgText'}
          onClick={() => setPreview(true)}
        />
      </div>
      <div className={styles.createPostContainer__post}>
        {preview ? (
          <ReactMarkdown className={styles.markdown}>{markdownInputs.title}</ReactMarkdown>
        ) : (
          <input name="title" value={markdownInputs.title} onChange={handleChange} />
        )}
        {preview ? (
          <ReactMarkdown
            component={{ code: Component, style: atomOneDark }}
            className={styles.markdownPost}>
            {markdownInputs.post}
          </ReactMarkdown>
        ) : (
          <textarea
            className={styles.createPostContainer__post__textArea}
            name="post"
            value={markdownInputs.post}
            onChange={handleChange}
          />
        )}
        <IconsMenuBar className={styles.menuBar} />
        <div className={styles.createPostContainer__post__buttonsContainer}>
          <div className={styles.createPostContainer__post__buttonsContainer__buttonsLeft}>
            <Button
              showImage
              src={cover}
              alt={'Cover'}
              theme={'primary'}
              text={'Add Cover'}
              size={'md'}
            />
            <Button
              showImage
              src={Tvector}
              alt={'T'}
              theme={'primary'}
              text={'Add Subtitle'}
              size={'md'}
            />
          </div>
          <Button theme={'secondary'} text={'Publish'} size={'md'} />
        </div>
      </div>
    </main>
  );
}

const Component = ({ value, language }) => {
  return <SyntaxHighlighter language={language ?? null}>{value ?? ''}</SyntaxHighlighter>;
};

export default CreatePost;
Component.propTypes = {
  value: PropTypes.any,
  language: PropTypes.string
};
