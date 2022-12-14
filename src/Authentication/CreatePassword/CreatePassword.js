import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Common/Button/Button';
import Input from '../../Common/Input/Input';
import styles from './CreatePassword.module.scss';

function CreatePassword() {
  return (
    <div className={styles.formWrap}>
      <h1>Create new Password</h1>
      <p className={styles.formWrap__description}>Enter new Password</p>
      <form>
        <div>
          <Input
            label={'New Password'}
            id="password"
            placeholder="**********"
            name={'password'}
            showPassword
          />
        </div>
        <div>
          <Input
            label={'Confirm Password'}
            id="password"
            placeholder="**********"
            name={'password'}
            showPassword
          />
        </div>
        <Button theme={'secondary'} size={'lg'} text={'Login'} />
      </form>
      <p className={styles.formWrap__linksContainer}>
        Dont have an account?
        <span className={styles.formWrap__linksContainer__links}>
          <Link to="/">SignUp</Link>
        </span>
      </p>
    </div>
  );
}

export default CreatePassword;
