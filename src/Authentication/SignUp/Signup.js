import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Input from 'common/input/Input';
import styles from './Signup.module.scss';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { userSignUp } from 'features/authentication/authActions';
import { useDispatch, useSelector } from 'react-redux';
import { signUpSchema } from './signUpSchema';

import Button from 'common/button/Button';

function Signup() {
  const { posts, loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  useEffect(() => {
    if (posts?.status === 'success') {
      navigate('/login');
    }
  }, [posts?.status]);

  return (
    <section className={styles.signUpForm}>
      <Formik
        initialValues={initialValues}
        validationSchema={signUpSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch(
            userSignUp({
              first_name: values.firstname,
              last_name: values.lastname,
              email_address: values.email.toLowerCase(),
              password: values.password
            })
          );
          resetForm({ values: '' });
        }}>
        {(formik) => {
          const { errors, touched, isValid, dirty } = formik;
          return (
            <div className={styles.formWrap}>
              <h1>Enter your Email to Sign up</h1>
              <p className={styles.formWrap__description}>Sign up to get started</p>
              <form onSubmit={formik.handleSubmit}>
                <div className={styles.name}>
                  <div>
                    <Input
                      label={'First Name'}
                      type={'text'}
                      id="firstname"
                      placeholder="Enter Name"
                      name={'firstname'}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.firstname}
                    />
                    {touched.firstname && errors.firstname && <p id="errors">{errors.firstname}</p>}
                  </div>
                  <div>
                    <Input
                      label={'Last Name'}
                      type={'text'}
                      id="lastname"
                      placeholder="Enter Name"
                      name={'lastname'}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.lastname}
                    />
                    {touched.lastname && errors.lastname && <p id="errors">{errors.lastname}</p>}
                  </div>
                </div>
                <div>
                  <Input
                    label={'Email'}
                    type={'email'}
                    id="email"
                    placeholder="Enter Email"
                    name={'email'}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
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
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  {touched.password && errors.password && <p id="errors">{errors.password}</p>}
                </div>
                <div>
                  <Input
                    label={'Confirm Password'}
                    id="confirmPassword"
                    placeholder="**********"
                    name={'confirmPassword'}
                    showPassword
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                  />
                  {touched.confirmPassword && errors.confirmPassword && (
                    <p id="errors">{errors.confirmPassword}</p>
                  )}
                </div>
                <Button
                  type={'submit'}
                  theme={'secondary'}
                  size={'lg'}
                  disabled={(!isValid && dirty) || loading}
                  text={'Sign Up'}
                  loading={loading}
                />
              </form>
              <p className={styles.formWrap__linksContainer}>
                Already have an account?
                <span className={styles.formWrap__linksContainer__links}>
                  <Link to="/login">Login</Link>
                </span>
              </p>
            </div>
          );
        }}
      </Formik>
    </section>
  );
}

export default Signup;
