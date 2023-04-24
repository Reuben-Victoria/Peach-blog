import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from 'api';
// import { useParams } from 'react-router-dom';
import { failureToast, successToast } from 'authentication/toast/Toast';

export const GETPROFILE = createAsyncThunk(
  'user/getProfile',
  async ({ userId }, { rejectWithValue }) => {
    try {
      const profileData = await instance.get(`blogs/profile/${userId}`);
      return profileData.data;
    } catch (error) {
      failureToast(`${error.response?.data?.message}`);
      return rejectWithValue(error.response.data);
    }
  }
);

export const UPDATEUSER = createAsyncThunk(
  'user/update',
  async ({ upload_photo, first_name, last_name, tagline, userId, bio }, { rejectWithValue }) => {
    try {
      const { data } = await instance.patch(`users/update_user/${userId}`, {
        upload_photo,
        first_name,
        last_name,
        tagline,
        bio
      });
      successToast(`${data.message}`);
      return data;
    } catch (error) {
      failureToast(`${error.response?.data?.message}`);
      return rejectWithValue(error.response.data);
    }
  }
);

export const DELETEUSER = createAsyncThunk(
  'user/delete',
  async ({ userId }, { rejectWithValue }) => {
    try {
      const data = await instance.delete(`users/delete_user/${userId}`);
      successToast(`${data.message}`);
      localStorage.clear();
      delete instance.defaults.headers.common['Authorization'];
      return data;
    } catch (error) {
      failureToast(`${error.response?.data?.message}`);
      return rejectWithValue(error.response.data);
    }
  }
);
