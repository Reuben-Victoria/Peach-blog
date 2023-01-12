import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { convertToRaw, convertFromRaw, EditorState } from 'draft-js';
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
import { postAdded } from '../../Features/posts/postActions';

function CreatePost() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.post);
  const [editorState, setEditorState] = useState(() => {
    if (localStorage.getItem('editor-state')) {
      return EditorState.createWithContent(
        convertFromRaw(JSON.parse(localStorage.getItem('editor-state')))
      );
    }
    return EditorState.createEmpty();
  });
  const [image, setImage] = useState(() => {
    const initialData = { preview: '', raw: '' };

    return initialData;
  });

  useEffect(() => {
    if (localStorage.getItem('image-preview')) {
      const newData = JSON.parse(localStorage.getItem('image-preview'));
      console.log(URL, newData, 'URL >>>');
      // setPreview(newData);
    }
  }, []);
  const fileInput = useRef(null);
  function handleClick(event) {
    event.preventDefault();
    fileInput.current?.click();
    console.log('hhhh');
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append(image, 'image');
    dispatch(
      postAdded({
        cover: formData.append(image.raw),
        title: 'fdgkdhskfjhdsj',
        subtitle: '',
        post: editorState
      })
    );
    console.log(image.raw, 'post image');
    console.log('Tell me why');
  }

  function handleImage(event) {
    if (event.target.files.length) {
      setImage({ preview: URL.createObjectURL(event.target.files[0]), raw: event.target.files[0] });
      localStorage.setItem(
        'image-preview',
        JSON.stringify({
          preview: URL.createObjectURL(event.target.files[0]),
          raw: event.target.files[0]
        })
      );
    }
    console.log(event.target.files[0]);
  }

  const onEditorStateChange = (value) => {
    setEditorState(value);
    localStorage.setItem(
      'editor-state',
      JSON.stringify(convertToRaw(editorState.getCurrentContent()))
    );
  };

  console.log('store', editorState);

  return (
    <main className={styles.createPostContainer}>
      <div className={styles.createPostContainer__icons}>
        <TagIcon src={EditIcon} text={'Write'} size={'lg'} variant={'lgText'} onClick={() => {}} />
        <Divider />
        <TagIcon
          src={ShowIcon}
          text={'Preview'}
          size={'lg'}
          variant={'lgText'}
          onClick={() => {}}
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
      <form className={styles.createPostContainer__body} onSubmit={handleSubmit}>
        <input
          ref={fileInput}
          type="file"
          accept="image/*"
          name="file"
          onChange={handleImage}
          style={{ display: 'none' }}
        />
        {image.preview && (
          <div className={styles.createPostContainer__body__image}>
            <img src={image.preview} alt="image" />
          </div>
        )}
        <EditorBar
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          // toolbarOnFocus
        />
        <div className={styles.buttonsContainer}>
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
          <Button
            theme={'secondary'}
            text={'Publish'}
            size={'md'}
            type={'submit'}
            loading={loading}
          />
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
