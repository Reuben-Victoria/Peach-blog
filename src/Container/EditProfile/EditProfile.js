import React from 'react';
import dummy from '../../assets/dummy.svg';
import Input from '../../Common/Input/Input';
import Button from '../../Common/Button/Button';
import upload from '../../assets/upload.svg';
import styles from './EditProfile.module.scss';

function EditProfile() {
  return (
    <section className={styles.editProfileWrapper}>
      <h1>Basic Info</h1>
      <div className={styles.editProfileWrapper__profileImage}>
        <img src={dummy} alt="profile picture" />
      </div>
      <div className={styles.editProfileWrapper__upload}>
        <img src={upload} alt="upload" />
      </div>
      <form className={styles.editProfileWrapper__form}>
        <div>
          <Input placeholder={'Full name'} label="Full name" />
        </div>
        <div>
          <Input placeholder={'Tagline'} label="Tagline" />
        </div>
        <div>
          <label>About You</label>
          <textarea placeholder="Add Bio" />
        </div>
        <div className={styles.editProfileWrapper__form__buttons}>
          <Button theme={'lightPink'} size={'sm'} text={'Save'} />
        </div>
      </form>
    </section>
  );
}

export default EditProfile;
