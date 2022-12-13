import React from 'react';
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
      </form>
      <div>
        <Input
          label={'Confirm Password'}
          id="password"
          placeholder="**********"
          name={'password'}
          showPassword
        />
      </div>
      <p className={styles.formWrap__linksContainer}>
        Already have an account?
        {/* <span className={styles.formWrap__linksContainer__links}>
          <Link to="login">Login</Link>
        </span> */}
      </p>
    </div>
  );
}

export default CreatePassword;
