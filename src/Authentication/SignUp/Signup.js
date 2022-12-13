import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../Common/Input/Input';
import styles from './Signup.module.scss';
function Signup() {
  return (
    <div className={styles.formWrap}>
      <h1>Enter your Email to Sign up</h1>
      <p className={styles.formWrap__description}>Sign up to get started</p>
      <form>
        <div className={styles.name}>
          <Input
            label={'First Name'}
            type={'text'}
            id="firstname"
            placeholder="Enter Name"
            name={'firstname'}
          />
          <Input
            label={'Last Name'}
            type={'text'}
            id="lastname"
            placeholder="Enter Name"
            name={'lastname'}
          />
        </div>
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
      </form>
      <p className={styles.formWrap__linksContainer}>
        Already have an account?
        <span className={styles.formWrap__linksContainer__links}>
          <Link to="login">Login</Link>
        </span>
      </p>
    </div>
  );
}

export default Signup;
