import { createAsyncThunk } from '@reduxjs/toolkit';
//  import Instance from '../../api';

import api from '../../api';
import { failureToast, successToast } from '../../Authentication/Toast/Toast';

export const userSignUp = createAsyncThunk(
  'auth/signup',
  async ({ first_name, last_name, email_address, password }, { rejectWithValue }) => {
    try {
      const { data } = await api.post('users/signup', {
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
      const { data } = await api.post('users/login', { email_address, password });
      localStorage.setItem('userToken', data?.data?.token);
      localStorage.setItem('userInfo', JSON.stringify(data?.data));
      successToast(`${data.message}`);
      console.log(data?.data, 'data');
      return data;
    } catch (error) {
      console.log(error.response, 'error');
      failureToast(error.response?.data?.message);
      return rejectWithValue(error.response.data);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  'auth/forgotpassword',
  async ({ email_address }, { rejectWithValue }) => {
    try {
      const { data } = await api.post('users/forgot_password', { email_address });
      successToast(`${data.message}`);
      return data;
    } catch (error) {
      console.log(error.response, 'error');
      failureToast(error.response?.data?.message);
      return rejectWithValue(error.response.data);
    }
  }
);

export const verifyCode = createAsyncThunk(
  'auth/verifyCode',
  async ({ code, email_address }, { rejectWithValue }) => {
    try {
      const { data } = await api.patch('users/verify_code', { code, email_address });
      successToast(`${data.message}`);
      return data;
    } catch (error) {
      console.log(error.response, 'error');
      failureToast(error.response?.data?.message);
      return rejectWithValue(error.response.data);
    }
  }
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({ token, password }, { rejectWithValue }) => {
    try {
      const { data } = await api.patch('users/reset_password', { token, password });
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
