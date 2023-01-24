import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../../api';
import { successToast, failureToast } from '../../Authentication/Toast/Toast';
import queryFormatter from '../../utils/queryFormatter';

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

export const getAllPosts = createAsyncThunk('post/allPost', async ({ params }) => {
  const response = await instance.get(`blogs/all_posts?${queryFormatter(params)}`);
  console.log('response', response.data.json());
  return response.data;
});

export const getMostLikedPost = createAsyncThunk('post/mostLiked', async () => {
  const response = await instance.get('blogs/most_liked');
  console.Consolelog('MostLiked', response);
  return response.data;
});

export const getLatestPost = createAsyncThunk('post/latestPost', async () => {
  const response = await instance.get('/blogs/latest_posts');
  console.log('getLatestPost', response.data);
  return response.data;
});

export const readOnePost = createAsyncThunk('post/viewPost', async ({ userId }) => {
  const response = await instance.get(`blogs/view_post/${userId}`);
  console.log('viewPost', response.data);
  return response.data;
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

export const getTopViews = createAsyncThunk('post/topViews', async () => {
  const response = await instance.get('blogs/top_views');
  console.log('top Views', response.data);
  return response.data;
});

export const editPost = createAsyncThunk(
  'post/edit-post',
  async ({ cover, title, subtitle, post, postId }, { rejectWithValue }) => {
    try {
      const { data } = await instance.put(`blogs/edit_post/${postId}`, {
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

export const deletePost = createAsyncThunk(
  'post/deletePost',
  async ({ postId }, { rejectWithValue }) => {
    try {
      const response = await instance.delete(`blogs/delete_post/${postId}`);
      successToast(`${response.message}`);
      console.log('delePost', response);
      return response.data;
    } catch (error) {
      failureToast(`${error.response?.data?.message}`);
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
