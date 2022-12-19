import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Input from '../../Common/Input/Input';
import styles from './Login.module.scss';
import Button from '../../Common/Button/Button';
import { userLogin } from '../../Redux/authentication/auth.action';

function Login() {
  const dispatch = useDispatch();
  const { loading, error, userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);
  const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be more than 8 characters')
      .max(10, 'Password can only be 10 characters')
      .matches(/[a-z]/, 'Password must contain at least one lower case')
      .matches(/[A-Z\s]+/, 'Password must contain at least one upper case')
      .matches(/[#?!@$%^&*-]/, 'Password must contain at least one special character')
  });
  const initialValues = {
    email: '',
    password: ''
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(userLogin(values));
        resetForm({ values: '' });
      }}>
      {(formik) => {
        const { touched } = formik;
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
                {touched.email && error.email && <p id="errors">{error.email}</p>}
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
                {touched.password && error.password && <p id="errors">{error.password}</p>}
              </div>
              <Link to="">
                <Button
                  type={'submit'}
                  theme={'secondary'}
                  size={'lg'}
                  text={'Log In'}
                  disabled={loading}
                />
              </Link>
            </form>

            <p className={styles.formWrap__linksContainer}>
              Dont have an account?
              <span className={styles.formWrap__linksContainer__links}>
                <Link to="/">SignUp</Link> | <Link to="/reset-password">Reset Password</Link>
              </span>
            </p>
          </div>
        );
      }}
    </Formik>
  );
}

export default Login;
