import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import Input from '../../Common/Input/Input';
import styles from './Login.module.scss';
import Button from '../../Common/Button/Button';
import { loginSchema } from './loginSchema';
import { userLogin } from '../../Features/authentication/authActions';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const authToken = localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null;
  const { userInfo, loading } = useSelector((state) => state.auth);
  useEffect(() => {
    if (userInfo?.data?.token) {
      navigate('/');
    }
  }, [userInfo]);

  return (
    <Formik
      initialValues={{}}
      validationSchema={loginSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(
          userLogin({
            email_address: values.email.replace(/^\s+|\s+$/gm, ''),
            password: values.password
          })
        );

        resetForm({ values: '' });
      }}>
      {(formik) => {
        const { touched, errors } = formik;
        return (
          <div className={styles.formWrap}>
            <h1>Great to see you again</h1>
            <p className={styles.formWrap__description}>Please login to your account</p>
            <form onSubmit={formik.handleSubmit}>
              <div>
                <Input
                  label={'Email'}
                  type={'email'}
                  id="email"
                  placeholder="Enter Email"
                  name={'email'}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {touched.email && errors.email && <p id="errors">{errors.email}</p>}
              </div>
              <div>
                <Input
                  label={'Password'}
                  id="password"
                  placeholder="**********"
                  name={'password'}
                  showPassword
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {touched.password && errors.password && <p id="errors">{errors.password}</p>}
              </div>
              <Button
                type={'submit'}
                theme="secondary"
                size={'lg'}
                text={'Log In'}
                loading={loading}
              />
            </form>

            <p className={styles.formWrap__linksContainer}>
              Dont have an account?
              <span className={styles.formWrap__linksContainer__links}>
                <Link to="/signup">SignUp</Link> | <Link to="/reset-password">Reset Password</Link>
              </span>
            </p>
          </div>
        );
      }}
    </Formik>
  );
}

export default Login;
