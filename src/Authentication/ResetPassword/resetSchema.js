import * as Yup from 'yup';

export const resetSchema = Yup.object().shape({
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(10, 'Password can only be 10 characters')
    .matches(/[a-z]/, 'Password must contain at least one lower case')
    .matches(/[A-Z\s]+/, 'Password must contain at least one upper case')
    .matches(/[#?!@$%^&*-]/, 'Password must contain at least one special character'),
  confirmPassword: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
});
