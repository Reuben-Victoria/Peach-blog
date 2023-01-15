import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';
import { failureToast, successToast } from '../../Authentication/Toast/Toast';

export const updateUser = createAsyncThunk(
  'user/update',
  async ({ upload_photo, first_name, last_name, tagline, bio }, { rejectWithValue }) => {
    try {
      const { data } = await api.patch('users/update_user/user-645e7b227a3111ed818b4b7e8f4b67ed', {
        upload_photo,
        first_name,
        last_name,
        tagline,
        bio
      });
      successToast(`${data.message}`);
      return data;
    } catch (error) {
      console.log(error.response, 'error');
      failureToast(`${error.response?.data?.message}`);
      return rejectWithValue(error.response.data);
    }
  }
);
