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

export const getLatestPost = createAsyncThunk('post/latestPost', async () => {
  const response = await instance.get('/blogs/latest_posts');
  console.log('fhghfhg', response);
  return response;
});

export const addComment = createAsyncThunk(
  'post/comment',
  async ({ comment, postId }, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(`blogs/repost/${postId}`, { comment });
      return data;
    } catch (error) {
      console.log(error.response, 'error');
      return rejectWithValue(error.response.data);
    }
  }
);

export const likePost = createAsyncThunk(
  'post/likePost',
  async ({ likePost, postId }, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(`blogs/like/${postId}`, { likePost });
      return data;
    } catch (error) {
      console.log(error.response, 'error');
      return rejectWithValue(error.response.data);
    }
  }
);
