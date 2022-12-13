import React from 'react';
import Input from '../../Common/Input/Input';
import styles from './ResetPassword.module.scss';
function Verification() {
  return (
    <div className={styles.formWrap}>
      <h1>Enter 4- digit code</h1>
      <p className={styles.formWrap__description}>Enter the code sent to your mail</p>
      <form>
        <div>
          <Input label={'Code'} type={'email'} id="email" placeholder="Enter Code" name={'email'} />
        </div>
      </form>
      <p className={styles.formWrap__linksContainer}>Already have an account?</p>
    </div>
  );
}

export default Verification;
