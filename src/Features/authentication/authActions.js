import { createAsyncThunk } from '@reduxjs/toolkit';
//  import Instance from '../../api';

import api from '../../api';

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
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const userLogin = createAsyncThunk(
  'auth/login',
  async ({ email_address, password }, { rejectWithValue }) => {
    try {
      const { data } = await api.post('users/login', { email_address, password });
      localStorage.setItem('userToken', data?.data?.token);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const resetPassword = createAsyncThunk(
  'auth/resetpassword',
  async ({ email_address }, { rejectWithValue }) => {
    try {
      const { data } = await api.post('users/forgot_password', { email_address });
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const verifyPassword = createAsyncThunk(
  'auth/verifyPassword',
  async ({ code }, { rejectWithValue }) => {
    try {
      const { data } = await api.patch('users/verify_code', { code });
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.message);
      } else {
        return rejectWithValue(error.message);
      }
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