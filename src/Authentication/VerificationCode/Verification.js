import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../Common/Input/Input';
import styles from './Verification.module.scss';
import Button from '../../Common/Button/Button';
import { verifyPassword } from '../../Features/authentication/authActions';
function Verification() {
  const dispatch = useDispatch();
  const { userInfo, loading } = useSelector((state) => state.auth);
  const [code, setCode] = useState('');
  function handleChange(event) {
    setCode(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(verifyPassword({ code: code }));
  };
  console.log(code);
  return (
    <div className={styles.formWrap}>
      <h1>Enter 4- digit code</h1>
      <p className={styles.formWrap__description}>Enter the code sent to your mail</p>
      <form>
        <div>
          <Input
            label={'Code'}
            type={'text'}
            id="code"
            placeholder="Enter Code"
            name={'code'}
            onChange={handleChange}
            value={code}
          />
        </div>
        <Button
          theme={'secondary'}
          size={'lg'}
          text={'Verify Code'}
          onClick={handleSubmit}
          loading={loading}
        />
      </form>
      <p className={styles.formWrap__linksContainer}>
        <Link to="/reset-password">Resend code</Link>
      </p>
    </div>
  );
}

export default Verification;
