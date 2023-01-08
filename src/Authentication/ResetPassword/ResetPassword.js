import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import Successful from '../Successful/Successful';
import { resetSchema } from './resetSchema';
import Input from '../../Common/Input/Input';
import styles from './ResetPassword.module.scss';
import Button from '../../Common/Button/Button';
import { resetPassword } from '../../Features/authentication/authActions';

function ResetPassword() {
  const [toggle, setToggle] = useState(false);
  const { userInfo, loading } = useSelector((state) => state.auth);

  function toggleModal() {
    setToggle(!toggle);
  }

  const token = localStorage.getItem('userToken');
  console.log(userInfo, 'userInfo');
  console.log(token, 'token');

  const dispatch = useDispatch();
  useEffect(() => {
    if (userInfo?.data?.status === 'success') {
      localStorage.removeItem('userToken');
      toggleModal();
    }
  }, [userInfo, toggle]);

  return (
    <Formik
      initialValues={{ password: '', confirmPassword: '' }}
      validationSchema={resetSchema}
      onSubmit={(values) => {
        dispatch(
          resetPassword({
            token: token,
            password: values.password.replace(/^\s+|\s+$/gm, '')
          })
        );
      }}>
      {(formik) => {
        const { touched, errors } = formik;
        return (
          <div className={styles.formWrap}>
            <h1>Create new password</h1>
            <p className={styles.formWrap__description}>Enter new Password</p>
            <form onSubmit={formik.handleSubmit}>
              <div>
                <Input
                  label={'New Password'}
                  showPassword
                  id="newPassword"
                  placeholder="**********"
                  name={'password'}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {touched.password && errors.password && <p id="errors">{errors.password}</p>}
              </div>
              <div>
                <Input
                  label={'Confirm New Password'}
                  id="password"
                  placeholder="**********"
                  name={'confirmPassword'}
                  showPassword
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <p id="errors">{errors.confirmPassword}</p>
                )}
              </div>
              <Button
                type={'submit'}
                theme="secondary"
                size={'lg'}
                text={'Proceed'}
                loading={loading}
              />
            </form>

            <p className={styles.formWrap__linksContainer}>
              Dont have an account?
              <span className={styles.formWrap__linksContainer__links}>
                <Link to="/signup">SignUp</Link>
              </span>
            </p>
            {toggle && <Successful toggle={toggle} setToggle={setToggle} />}
          </div>
        );
      }}
    </Formik>
  );
}

export default ResetPassword;
