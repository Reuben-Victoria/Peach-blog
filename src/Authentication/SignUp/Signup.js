import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../Common/Input/Input';
import styles from './Signup.module.scss';
import { Formik } from 'formik';
import * as Yup from 'yup';
import api from '../../api';

import Button from '../../Common/Button/Button';
function Signup() {
  const signUpSchema = Yup.object().shape({
    firstname: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('First Name is required'),
    lastname: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Last Name is Required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password is too short')
      .max(10, 'Password can only be 10 characters')
      .matches(/[a-z]/, 'Password must contain at least one lower case')
      .matches(/[A-Z\s]+/, 'Password must contain at least one upper case')
      // .matches(/^[0-9\b]+$/, 'Password must contain at least one digit')
      .matches(/[#?!@$%^&*-]/, 'Password must contain at least one special character'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
  });

  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: ''
  };
  return (
    <section className={styles.signUpForm}>
      <Formik
        initialValues={initialValues}
        validationSchema={signUpSchema}
        onSubmit={(values, { resetForm }) => {
          api.post('users/signup', {
            first_name: values.firstname,
            last_name: values.lastname,
            email_address: values.email,
            password: values.password
          });
          console.log(values);
          resetForm({ values: '' });
        }}>
        {(formik) => {
          const { errors, touched, isValid, dirty } = formik;
          console.log(isValid);
          console.log(dirty);
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
                  text={'Sign Up'}
                  disabled={!(dirty && isValid)}
                />
              </form>
              <p className={styles.formWrap__linksContainer}>
                Already have an account?
                <span className={styles.formWrap__linksContainer__links}>
                  <Link to="login">Login</Link>
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
