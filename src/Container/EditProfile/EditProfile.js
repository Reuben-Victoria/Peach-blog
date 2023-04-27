import React, { useRef, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import dummy from 'assets/dummy.svg';
import Input from 'common/input/Input';
import Button from 'common/button/Button';
import upload from 'assets/upload.svg';
import { wordsCount } from 'utils/stringFormatter';
import styles from './EditProfile.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATEUSER, DELETEUSER } from 'features/users/usersActions';
import DeleteModal from 'components/deleteModal/DeleteModal';

function EditProfile() {
  const { userId } = useParams();
  const value = JSON.parse(localStorage.getItem('userInfo'));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [image, setImage] = useState({
    preview: value.user.upload_photo,
    raw: value.user.upload_photo
  });
  const [details, setDetails] = useState({
    firstName: value.user.first_name,
    lastName: value.user.last_name,
    tagLine: '',
    bio: ''
  });
  const [toggle, setToggle] = useState(false);

  const { loading, userData } = useSelector((state) => state.users);
  const fileInput = useRef(null);

  const handleClick = (event) => {
    event.preventDefault();
    fileInput.current?.click();
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
    dispatch(
      UPDATEUSER({
        userId: userId,
        ...formData,
        upload_photo: image.raw,
        first_name: details.firstName,
        last_name: details.lastName,
        tagline: details.tagLine,
        bio: details.bio
      })
    );
  };

  useEffect(() => {
    if (userData?.status === 'Success') {
      navigate(`/profile/${userId}`);
    }
  }, [userData?.status]);
  return (
    <section className={styles.editProfileWrapper}>
      <div className={styles.topSide}>
        <div>
          <h1>Basic Info</h1>
          <div className={styles.editProfileWrapper__profileImage}>
            <img src={image.raw ? image.preview : dummy} alt="profile picture" />
          </div>
          <button className={styles.editProfileWrapper__upload} onClick={handleClick}>
            <img src={upload} alt="upload" />
          </button>
        </div>
        <div>
          <Button
            text={'Delete'}
            theme={'delete'}
            variant={'md'}
            onClick={() => {
              setToggle(!toggle);
            }}
          />
        </div>
      </div>
      <DeleteModal
        toggle={toggle}
        setToggle={setToggle}
        text={'Account'}
        userId={userId}
        onClick={() => {
          dispatch(DELETEUSER({ userId }));
          localStorage.clear();
          navigate('/signup');
        }}
      />
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
          <span>{wordsCount(details.bio)}/100</span>
          <textarea
            placeholder="Add Bio"
            onChange={handleOnChange}
            name={'bio'}
            maxLength="100"
            value={details.bio}
          />
        </div>
        <div className={styles.editProfileWrapper__form__buttons}>
          <Button
            theme={'lightPink'}
            size={'sm'}
            text={'Save'}
            type={'submit'}
            loading={loading}
            disabled={loading}
          />
        </div>
      </form>
    </section>
  );
}

export default EditProfile;
