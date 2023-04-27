import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Input from 'common/input/Input';
import styles from './ForgotPassword.module.scss';
import Button from 'common/button/Button';
import { forgotPassword } from 'features/authentication/authActions';

function ForgotPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const { loading, success } = useSelector((state) => state.auth);

  useEffect(() => {
    if (success && loading === false) {
      navigate(`/verify-code/${email}`);
    }
  }, [success]);

  const resetSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required')
  });

  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={resetSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(
          forgotPassword({
            email_address: values.email.replace(/^\s+|\s+$/gm, '')
          })
        );
        resetForm({ values: '' });
        setEmail(values.email);
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

export default ForgotPassword;
