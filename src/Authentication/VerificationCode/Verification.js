import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Input from 'Common/Input/Input';
import styles from './Verification.module.scss';
import Button from 'Common/Button/Button';
import { verifyCode } from 'Features/authentication/authActions';
function Verification() {
  const dispatch = useDispatch();
  const { email } = useParams();
  const { userInfo, loading } = useSelector((state) => state.auth);
  const [code, setCode] = useState('');
  function handleChange(event) {
    setCode(event.target.value);
  }
  useEffect(() => {
    if (userInfo?.status === 'success') {
      localStorage.removeItem('email');
    }
  }, [userInfo]);
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(verifyCode({ code: code.replace(/^\s+|\s+$/gm, ''), email_address: email }));
  };
  return (
    <div className={styles.formWrap}>
      <h1>Enter 4- digit code</h1>
      <p className={styles.formWrap__description}>Enter the code sent to your mail</p>
      <form onSubmit={handleSubmit}>
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
          type={'submit'}
          theme={'secondary'}
          size={'lg'}
          text={'Verify Code'}
          loading={loading}
        />
      </form>
      <p className={styles.formWrap__linksContainer}>
        <Link to="/forgot-password">Resend code</Link>
      </p>
    </div>
  );
}

export default Verification;
