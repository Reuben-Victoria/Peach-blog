import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';

// let formData = new FormData();
export const postAdded = createAsyncThunk(
  'post/postAdded',
  async ({ cover, title, subtitle, post }, { rejectWithValue }) => {
    try {
      const { data } = await api.post('blogs/add_post', {
        cover,
        title,
        subtitle,
        post
      });
      return data;
    } catch (error) {
      console.log(error.response, 'error');
      return rejectWithValue(error.response.data);
    }
  }
);
