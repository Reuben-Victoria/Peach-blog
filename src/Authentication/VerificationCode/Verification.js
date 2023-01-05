import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../Common/Input/Input';
import styles from './Verification.module.scss';
import Button from '../../Common/Button/Button';
import { successToast, failureToast } from '../Toast/Toast';
import { verifyCode } from '../../Features/authentication/authActions';
function Verification() {
  const dispatch = useDispatch();
  // const { email } = useParams();
  const { userInfo, loading } = useSelector((state) => state.auth);
  const emailToken = localStorage.getItem('email');
  console.log(emailToken);
  const [code, setCode] = useState('');
  function handleChange(event) {
    setCode(event.target.value);
  }
  const notification = () => {
    if (userInfo?.data?.status === 'success') {
      successToast(`${userInfo?.data?.message}`);
    } else {
      failureToast(`${userInfo?.data?.message}`);
    }
  };
  useEffect(() => {
    if (userInfo?.status === 'success') {
      localStorage.removeItem('email');
    }
  }, [userInfo]);
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(verifyCode({ code: code.replace(/^\s+|\s+$/gm, ''), email_address: emailToken }));

    notification();
  };
  console.log(code);
  console.log(userInfo, 'userInfo');
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
        <Link to="/reset_password">Resend code</Link>
      </p>
    </div>
  );
}

export default Verification;
