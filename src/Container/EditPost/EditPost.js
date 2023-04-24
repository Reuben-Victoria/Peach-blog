import React, { useState, useRef, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'common/button/Button';
import { convertToRaw, EditorState } from 'draft-js';
import cover from 'assets/cover.svg';
import { readOnePost, editPost } from 'features/posts/postActions';
import EditorBar from 'components/editor/EditorBar';
import styles from './EditPost.module.scss';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import PageLayout from 'layouts/PageLayout';

function EditPost() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  const params = useParams();
  const { postId } = params;
  const [inputValues, setInputValues] = useState({
    title: posts?.data?.posts?.[0]?.title,
    subtitle: posts?.data?.posts?.[0]?.subtitle
    // post: posts?.data?.posts?.[0]?.post
  });

  useLayoutEffect(() => {
    dispatch(readOnePost({ postId }));
  }, []);
  const [coverImage, setCoverImage] = useState({
    preview: posts?.data?.posts?.[0]?.cover,
    raw: posts?.data?.posts?.[0]?.cover
  });
  const fileInput = useRef(null);

  const [editorState, setEditorState] = useState(() => {
    // posts?.data?.posts?.[0]?.posts.map((post) => {
    //   const blocksFromHTML = convertFromRaw(post);
    //   const contentState = ContentState.createFromBlockArray(
    //     blocksFromHTML.contentBlocks,
    //     blocksFromHTML.entityMap
    //   );
    return EditorState.createEmpty();
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    const data = editorState.getCurrentContent();
    dispatch(
      editPost({
        postId: postId,
        ...formData,
        cover: coverImage.raw,
        title: inputValues.title,
        subtitle: inputValues.subtitle,
        post: JSON.stringify(convertToRaw(data))
      })
    );
  };

  function handleImage(event) {
    if (event.target.files.length) {
      setCoverImage({
        preview: URL.createObjectURL(event.target.files[0]),
        raw: event.target.files[0]
      });
      localStorage.setItem(
        'image-preview',
        JSON.stringify({
          preview: URL.createObjectURL(event.target.files[0]),
          raw: event.target.files[0]
        })
      );
    }
  }

  function handleClick(event) {
    event.preventDefault();
    fileInput.current?.click();
  }
  const onEditorStateChange = (value) => {
    setEditorState(value);
  };
  return (
    <PageLayout onClick={handleSubmit} toggle>
      <form className={styles.createPostContainer__body}>
        <div className={styles.createPostContainer__body__header}>
          <input
            placeholder="Add Post Title... "
            name="title"
            onChange={handleOnChange}
            value={inputValues.title}
          />
          <input
            ref={fileInput}
            type="file"
            accept="image/*"
            name="file"
            onChange={handleImage}
            style={{ display: 'none' }}
          />
        </div>
        {coverImage.preview && (
          <div className={styles.createPostContainer__body__image}>
            <img src={coverImage.preview} alt="image" />
          </div>
        )}
        <div className={styles.createPostContainer__body__subtitle}>
          <input
            placeholder="Add Subtitle... "
            name="subtitle"
            onChange={handleOnChange}
            value={inputValues.subtitle}
          />
        </div>
        <div className={styles.editPostWrapper__text}>
          <EditorBar editorState={editorState} onEditorStateChange={onEditorStateChange} />
        </div>
        <div className={styles.buttonsContainer}>
          <Button
            onClick={handleClick}
            showImage
            src={cover}
            alt={'Cover'}
            theme={'primary'}
            text={'Add Cover'}
            size={'md'}
          />
        </div>
      </form>
    </PageLayout>
  );
}
EditPost.propTypes = {
  onSubmit: PropTypes.func
};
export default EditPost;
