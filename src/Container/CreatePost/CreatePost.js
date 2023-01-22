import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { convertToRaw, convertFromRaw, EditorState } from 'draft-js';
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
  const [inputValues, setInputValues] = useState({
    title: '',
    subtitle: ''
  });

  const [toggle, setToggle] = useState(false);

  const [image, setImage] = useState({ preview: '', raw: '' });

  useEffect(() => {
    if (localStorage.getItem('image-preview')) {
      // const newData = JSON.parse(localStorage.getItem('image-preview'));
      // setPreview(newData);
    }
  }, []);
  const fileInput = useRef(null);
  const form = useRef();
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

  // const [imageBaseUrl, setImageBaseUrl] = useState('');

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
    // setImageBaseUrl(event.target.files[0]);
  }

  // const getBase64 = (image) => {
  //   return new Promise((resolve) => {
  //     // Make new FileReader
  //     let reader = new FileReader();

  //     // Convert the file to base64 text
  //     reader.readAsDataURL(image.raw);

  //     // on reader load somthing...
  //     reader.onload = () => {
  //       let baseURL = reader.result;
  //       setImageBaseUrl(baseURL);
  //       resolve(baseURL);
  //     };
  //   });
  // };
  // getBase64(image);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    // formData.append('cover', image.raw),
    //   formData.append('title', 'vgdsvfhjvdhjghjgsd'),
    //   formData.append('subtitle', 'vgdsvfhjvdhjghjgsd'),
    //   formData.append('post', localStorage.getItem('editor-state'));

    dispatch(
      postAdded({
        ...formData,
        cover: image.raw,
        title: inputValues.title,
        subtitle: inputValues.subtitle,
        post: localStorage.getItem('editor-state')
      })
    );
  }

  console.log(image.raw);

  const onEditorStateChange = (value) => {
    setEditorState(value);
    localStorage.setItem(
      'editor-state',
      JSON.stringify(convertToRaw(editorState.getCurrentContent()))
    );
  };

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
      <form ref={form} className={styles.createPostContainer__body} onSubmit={handleSubmit}>
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
