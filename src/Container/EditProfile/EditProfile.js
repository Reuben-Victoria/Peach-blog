import React, { useRef, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import dummy from '../../assets/dummy.svg';
import Input from '../../Common/Input/Input';
import Button from '../../Common/Button/Button';
import upload from '../../assets/upload.svg';
import styles from './EditProfile.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATEUSER, DELETEUSER } from '../../Features/users/usersActions';
import DeleteModal from '../../Components/DeleteModal/DeleteModal';

function EditProfile() {
  const { userId } = useParams();
  console.log(userId, 'ID>>>>>>');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [image, setImage] = useState({ preview: '', raw: '' });
  const [details, setDetails] = useState({
    firstName: '',
    lastName: '',
    tagLine: '',
    bio: ''
  });
  const [toggle, setToggle] = useState(false);

  const { loading, success } = useSelector((state) => state.users);
  const fileInput = useRef(null);

  // console.log(authData.user.id, 'AUTH DATA');

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
        id: userId,
        ...formData,
        upload_photo: image.raw,
        first_name: details.firstName,
        last_name: details.lastName,
        tagline: details.tagLine,
        bio: details.bio
      })
    );
    // console.log(details, 'details');
    // // console.log(formData, 'formData');
    // for (var keys of formData.entries()) {
    //   console.log(keys[0] + ',' + keys[1]);
    // }
  };

  useEffect(() => {
    if (success) {
      navigate(`/profile/${userId}`);
    }
  }, [success]);
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
          dispatch(DELETEUSER(userId));
          navigate('/login');
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
