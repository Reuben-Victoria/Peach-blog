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
      localStorage.setItem('userToken', data.userToken);
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
