import * as Yup from 'yup';

export const signUpSchema = Yup.object().shape({
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
