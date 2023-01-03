import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Input from '../../Common/Input/Input';
import styles from '../ResetPassword/ResetPassword.module.scss';
import Button from '../../Common/Button/Button';
import { resetPassword } from '../../Features/authentication/authActions';

function ResetPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo, loading } = useSelector((state) => state.auth);
  useEffect(() => {
    if (userInfo) {
      navigate('/verify-code');
    }
  }, []);
  const resetSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required')
  });
  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={resetSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(
          resetPassword({
            email_address: values.email.replace(/^\s+|\s+$/gm, '')
          })
        );
        resetForm({ values: '' });
      }}>
      {(formik) => {
        const { touched, errors } = formik;
        return (
          <div className={styles.formWrap}>
            <h1>Forgot Password</h1>
            <p className={styles.formWrap__description}>
              Give us your email so we can send you a code to reset your password.
            </p>
            <form onSubmit={formik.handleSubmit}>
              <div>
                <Input
                  label={'Email'}
                  type={'email'}
                  id="email"
                  placeholder="Enter Email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {touched.email && errors.email && <p id="errors">{errors.email}</p>}
              </div>
              <Button
                theme={'secondary'}
                size={'lg'}
                text={'Reset Password'}
                loading={loading}
                type={'submit'}
              />
            </form>
          </div>
        );
      }}
    </Formik>
  );
}

export default ResetPassword;
