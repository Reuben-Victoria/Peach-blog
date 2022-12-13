import React from 'react';
import Input from '../../Common/Input/Input';
import styles from './ResetPassword.module.scss';
function ResetPassword() {
  return (
    <div className={styles.formWrap}>
      <h1>Forgot Password</h1>
      <p className={styles.formWrap__description}>
        Give us your email so we can send you a code to reset your password.
      </p>
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
      </form>
    </div>
  );
}

export default ResetPassword;
