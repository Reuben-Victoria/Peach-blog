import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import dummy from '../../assets/dummy.svg';
import Input from '../../Common/Input/Input';
import Button from '../../Common/Button/Button';
import upload from '../../assets/upload.svg';
import styles from './EditProfile.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATEUSER } from '../../Features/users/usersActions';

function EditProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [image, setImage] = useState({ preview: '', raw: '' });
  const [details, setDetails] = useState({
    firstName: '',
    lastName: '',
    tagLine: '',
    bio: ''
  });
  const { loading, success } = useSelector((state) => state.users);
  const fileInput = useRef(null);

  const handleClick = (event) => {
    event.preventDefault();
    fileInput.current?.click();
    console.log('hhhh');
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setDetails({ ...details, [name]: value });
  };

  const handleChange = (event) => {
    setImage({ preview: URL.createObjectURL(event.target.files[0]), raw: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('upload_photo', image);
    formData.append('first_name', details.firstName);
    formData.append('last_name', details.lastName);
    formData.append('tagline', details.tagLine);
    formData.append('bio', details.bio);
    dispatch(
      UPDATEUSER({
        ...formData,
        upload_photo: image,
        first_name: details.firstName,
        last_name: details.lastName,
        tagLine: details.tagLine,
        bio: details.bio
      })
    );
    console.log(details, 'details');
    // console.log(formData, 'formData');
    for (var keys of formData.entries()) {
      console.log(keys[0] + ',' + keys[1]);
    }
  };

  useEffect(() => {
    if (success) {
      navigate('/profile');
    }
  }, [success]);
  return (
    <section className={styles.editProfileWrapper}>
      <h1>Basic Info</h1>
      <div className={styles.editProfileWrapper__profileImage}>
        <img src={image.raw ? image.preview : dummy} alt="profile picture" />
      </div>
      <button className={styles.editProfileWrapper__upload} onClick={handleClick}>
        <img src={upload} alt="upload" />
      </button>
      <form className={styles.editProfileWrapper__form} onSubmit={handleSubmit}>
        <input
          name="file"
          type="file"
          accept="image/*"
          ref={fileInput}
          onChange={handleChange}
          style={{ display: 'none' }}
        />
        <div className={styles.editProfileWrapper__form__name}>
          <Input
            placeholder={'First Name'}
            label="First Name"
            onChange={handleOnChange}
            value={details.firstName}
            name={'firstName'}
          />
          <Input
            placeholder={'Last Name'}
            label="Last Name"
            onChange={handleOnChange}
            name={'lastName'}
            value={details.lastName}
          />
        </div>
        <div>
          <Input
            placeholder={'Tagline'}
            label="Tagline"
            onChange={handleOnChange}
            name={'tagLine'}
            value={details.tagLine}
          />
        </div>
        <div>
          <label>About You</label>
          <textarea
            placeholder="Add Bio"
            onChange={handleOnChange}
            name={'bio'}
            value={details.bio}
          />
        </div>
        <div className={styles.editProfileWrapper__form__buttons}>
          <Button theme={'lightPink'} size={'sm'} text={'Save'} type={'submit'} loading={loading} />
        </div>
      </form>
    </section>
  );
}

export default EditProfile;
