import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { convertToRaw, convertFromRaw, EditorState } from 'draft-js';
import styles from './CreatePost.module.scss';
import Button from 'common/button/Button';
import Tvector from 'assets/TVector.svg';
import cover from 'assets/cover.svg';
import EditorBar from 'components/editor/EditorBar';
import { postAdded } from 'features/posts/postActions';

function CreatePost() {
  const dispatch = useDispatch();
  const { loading, posts } = useSelector((state) => state.post);
  const postId = posts?.data?.id;
  const navigate = useNavigate();
  const [editorState, setEditorState] = useState(() => {
    if (localStorage.getItem('editor-state')) {
      return EditorState.createWithContent(
        convertFromRaw(JSON.parse(localStorage.getItem('editor-state')))
      );
    }
    return EditorState.createEmpty();
  });
  const [inputValues, setInputValues] = useState({
    title: '',
    subtitle: ''
  });

  useEffect(() => {
    if (posts?.status === 'Successful') {
      navigate(`/view-post/${postId}`);
    }
  }, [posts?.status]);

  const [toggle, setToggle] = useState(false);

  const [image, setImage] = useState({ preview: '', raw: '' });

  const fileInput = useRef(null);
  // const form = useRef();
  function handleClick(event) {
    event.preventDefault();
    fileInput.current?.click();
  }

  const toggleSubtitle = (event) => {
    event.preventDefault();
    setToggle(!toggle);
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

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
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    // const contentState = convertFromRaw(editorState.getCurrentContent());
    // const data = EditorState.getCurrentContent(contentState);
    dispatch(
      postAdded({
        ...formData,
        cover: image.raw,
        title: inputValues.title,
        subtitle: inputValues.subtitle,
        post: JSON.stringify(convertToRaw(editorState.getCurrentContent()))
      })
    );
  };

  const onEditorStateChange = (value) => {
    setEditorState(value);
    localStorage.setItem(
      'editor-state',
      JSON.stringify(convertToRaw(editorState.getCurrentContent()))
    );
  };

  return (
    <main className={styles.createPostContainer}>
      <form className={styles.createPostContainer__body} onSubmit={handleSubmit}>
        <div className={styles.createPostContainer__body__header}>
          <input
            placeholder="Add Post Title... "
            name="title"
            onChange={handleOnChange}
            value={inputValues.title}
          />
        </div>
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
        {toggle && (
          <div className={styles.createPostContainer__body__subtitle}>
            <input
              placeholder="Add Subtitle... "
              name="subtitle"
              onChange={handleOnChange}
              value={inputValues.subtitle}
            />
          </div>
        )}
        <EditorBar editorState={editorState} onEditorStateChange={onEditorStateChange} />
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
              onClick={toggleSubtitle}
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
    </main>
  );
}

export default CreatePost;
