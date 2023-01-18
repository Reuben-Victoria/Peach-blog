import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../../api';
import { successToast, failureToast } from '../../Authentication/Toast/Toast';

// let formData = new FormData();
export const postAdded = createAsyncThunk(
  'post/postAdded',
  async ({ cover, title, subtitle, post }, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('blogs/add_post', {
        cover,
        title,
        subtitle,
        post
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

export const getLatestPost = createAsyncThunk('post/latestPost', async ({ rejectWithValue }) => {
  try {
    const { data } = await instance.get('blogs/latest_posts');
    console.log(data, 'Data>>>>>>>>>>>>>>>>');
    return data;
  } catch (error) {
    console.log(error.response, 'error');
    return rejectWithValue(error.response.data);
  }
});
