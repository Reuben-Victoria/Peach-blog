import React, { useState, useRef } from 'react';
// import ReactMarkdown from 'react-markdown';
// import Markdown from 'markdown-to-jsx';
// import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import PropTypes from 'prop-types';
import styles from './CreatePost.module.scss';
import TagIcon from '../../Common/TagIcons/TagIcon';
import EditIcon from '../../assets/Edit.svg';
import ShowIcon from '../../assets/Show.svg';
import Button from '../../Common/Button/Button';
import Divider from '../../Common/Divider/Divider';
import Tvector from '../../assets/TVector.svg';
import cover from '../../assets/cover.svg';
import EditorBar from '../../Components/Editor/EditorBar';

function CreatePost() {
  // const [markdownInputs, setMarkdownValues] = useState({
  //   title: 'Add post title...',
  //   post: 'Write your post...'
  // });
  const [editorState, setEditorState] = useState();
  const [image, setImage] = useState({ preview: '', raw: '' });
  const fileInput = useRef(null);
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   fileInput.current.onClick;
  // const formData = new FormData();
  // formData.append(image, 'image');
  // };

  function handleClick(event) {
    event.preventDefault();
    fileInput.current?.click();
    console.log('hhhh');
  }

  function handleImage(event) {
    if (event.target.files.length) {
      setImage({ preview: URL.createObjectURL(event.target.files[0]), raw: event.target.files[0] });
    }
    console.log(event.target.files[0]);
  }
  const [preview, setPreview] = useState(false);

  const onEditorStateChange = (value) => {
    setEditorState(value);
  };

  // function handleChange(event) {
  //   const { name, value } = event.target;
  //   setMarkdownValues({ ...markdownInputs, [name]: value });
  // }

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
      {/* <form className={styles.createPostContainer__post}>
        {preview ? (
          <Markdown className={styles.markdown}>{markdownInputs.title}</Markdown>
        ) : (
          <input name="title" value={markdownInputs.title} onChange={handleChange} />
        )}
        {preview ? (
          <Markdown
            options={{ overrides: { code: { component: Code } } }}
            className={styles.markdownPost}>
            {markdownInputs.post}
          </Markdown>
        ) : (
          <textarea
            className={styles.createPostContainer__post__textArea}
            name="post"
            value={markdownInputs.post}
            onChange={handleChange}
          />
        )}
     
      </form> */}
      <form className={styles.createPostContainer__body} onSubmit={() => {}}>
        <input
          ref={fileInput}
          type="file"
          accept="image/*"
          name="file"
          onChange={handleImage}
          style={{ display: 'none' }}
        />
        <div className={styles.createPostContainer__body__image}>
          {image && <img src={image.preview} alt="image" />}
        </div>
        <EditorBar editorState={editorState} onEditorStateChange={onEditorStateChange} />
        <div className={preview ? styles.buttonsDisplay : styles.buttonsContainer}>
          <div className={styles.buttonsContainer__buttonsLeft}>
            <Button
              onClick={handleClick}
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
          <Button theme={'secondary'} text={'Publish'} size={'md'} type={'submit'} />
        </div>
      </form>
      ;
    </main>
  );
}

// const Code = ({ value, language }) => {
//   return (
//     <SyntaxHighlighter language={language} style={dracula}>
//       {value}
//     </SyntaxHighlighter>
//   );
// };

export default CreatePost;
// Code.propTypes = {
//   value: PropTypes.any,
//   language: PropTypes.string
// };
