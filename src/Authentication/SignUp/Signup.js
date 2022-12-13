import React from 'react';
import Input from '../../Common/Input/Input';
import styles from './SignUp.module.scss';
function Signup() {
  return (
    <div className={styles.formWrap}>
      <h1>Enter your Email to Sign up</h1>
      <p>Sign up to get started</p>
      <form>
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
        <Input label={'Email'} type={'email'} id="email" placeholder="Enter Email" name={'email'} />
        <Input
          label={'Password'}
          id="password"
          placeholder="**********"
          name={'password'}
          showPassword
        />
      </form>
    </div>
  );
}

export default Signup;
