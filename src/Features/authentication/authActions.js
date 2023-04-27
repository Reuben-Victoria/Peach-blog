import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from 'api';
import { failureToast, successToast } from '../../authentication/toast/Toast';

export const userSignUp = createAsyncThunk(
  'auth/signup',
  async ({ first_name, last_name, email_address, password }, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('users/signup', {
        first_name,
        last_name,
        email_address,
        password
      });
      successToast(`${data.message}`);
      return data;
    } catch (error) {
      failureToast(error.response?.data?.message);
      return rejectWithValue(error.response.data);
    }
  }
);
export const userLogin = createAsyncThunk(
  'auth/login',
  async ({ email_address, password }, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('users/login', { email_address, password });
      localStorage.setItem('userInfo', JSON.stringify(data?.data));
      localStorage.setItem('userToken', data?.data?.token);
      instance.defaults.headers.common['Authorization'] = `Bearer ${data?.data?.token}`;
      successToast(`${data.message}`);
      return data;
    } catch (error) {
      failureToast(error.response?.data?.message);
      return rejectWithValue(error.response.data);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  'auth/forgotpassword',
  async ({ email_address }, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('users/forgot_password', { email_address });
      successToast(`${data.message}`);
      return data;
    } catch (error) {
      failureToast(error.response?.data?.message);
      return rejectWithValue(error.response.data);
    }
  }
);

export const verifyCode = createAsyncThunk(
  'auth/verifyCode',
  async ({ code, email_address }, { rejectWithValue }) => {
    try {
      const { data } = await instance.patch('users/verify_code', { code, email_address });
      successToast(`${data.message}`);
      return data;
    } catch (error) {
      failureToast(error.response?.data?.message);
      return rejectWithValue(error.response.data);
    }
  }
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({ token, password }, { rejectWithValue }) => {
    try {
      const { data } = await instance.patch('users/reset_password', { token, password });
      return data;
    } catch (error) {
      failureToast(error.response?.data?.message);
      return rejectWithValue(error.response.data);
    }
  }
);

// export const doLogIn = (data) => ({
//   type: 'DO_LOGIN',
//   data
// });

// export const doLogIn = (data) => {
//   api.post('users/login', data).then((res) => {
//     res.data;
//   });
// };
