import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../Common/Input/Input';
import styles from './Login.module.scss';
import Button from '../../Common/Button/Button';
function Signup() {
  return (
    <div className={styles.formWrap}>
      <h1>Great to see you again</h1>
      <p className={styles.formWrap__description}>Please login to your account</p>
      <form>
        <div>
          <Input
            label={'Email'}
            type={'email'}
            id="email"
            placeholder="Enter Email"
            name={'email'}
          />
        </div>
        <div>
          <Input
            label={'Password'}
            id="password"
            placeholder="**********"
            name={'password'}
            showPassword
          />
        </div>
        <Link to="">
          <Button theme={'secondary'} size={'lg'} text={'Log In'} />
        </Link>
      </form>

      <p className={styles.formWrap__linksContainer}>
        Dont have an account?
        <span className={styles.formWrap__linksContainer__links}>
          <Link to="/">SignUp</Link> | <Link to="/reset-password">Reset Password</Link>
        </span>
      </p>
    </div>
  );
}

export default Signup;
