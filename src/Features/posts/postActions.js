import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from 'api';
import { successToast, failureToast } from 'authentication/toast/Toast';
import queryFormatter from 'utils/queryFormatter';

// import { apiSlice } from "../api/apiSlice";

// export const extendedApiSice = apiSlice.injectEndpoints({
//   endpoints.builder => ({

//   })
// })

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
      failureToast(`${error.response?.data?.message}`);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getAllPosts = createAsyncThunk('post/allPost', async ({ params }) => {
  const response = await instance.get(`blogs/all_posts?${queryFormatter(params)}`);
  return response.data;
});

export const getMostLikedPost = createAsyncThunk('post/mostLiked', async () => {
  const response = await instance.get('blogs/most_liked');
  return response.data;
});

export const getLatestPost = createAsyncThunk('post/latestPost', async () => {
  const response = await instance.get('/blogs/latest_posts');
  localStorage.setItem('LatestPost', JSON.stringify(response.data));
  return response.data;
});

export const readOnePost = createAsyncThunk('post/viewPost', async ({ postId }) => {
  const response = await instance.get(`blogs/view_post/${postId}`);
  return response.data;
});

export const addComment = createAsyncThunk(
  'post/comment',
  async ({ comment, postId }, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(`blogs/comment/${postId}`, { comment });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const repost = createAsyncThunk('post/repost', async ({ postId }, { rejectWithValue }) => {
  try {
    const { data } = await instance.post(`blogs/repost/${postId}`);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const getTopViews = createAsyncThunk('post/topViews', async () => {
  const response = await instance.get('blogs/top_views');
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
      return rejectWithValue(error.response.data);
    }
  }
);

export const deletePost = createAsyncThunk(
  'post/deletePost',
  async ({ postId }, { rejectWithValue }) => {
    try {
      const response = await instance.delete(`blogs/delete_post/${postId}`);
      successToast(`${response?.data?.message}`);
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
      return rejectWithValue(error.response.data);
    }
  }
);
