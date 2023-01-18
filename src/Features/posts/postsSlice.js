import { createSlice } from '@reduxjs/toolkit';
import { postAdded, getLatestPost } from './postActions';

const initialState = {
  posts: [],
  loading: false,
  error: null,
  success: false
};

const postsSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    // postAdded(state, action) {
    //   state.posts.push(action.payload);
    // },
    // prepare(cover, title, subtitle, post){
    //   return(
    //     payload : {
    //       cover,
    //       title,
    //       subtitle,
    //       post
    //     }
    //   )
    // }
  },
  extraReducers: (builder) => {
    builder.addCase(postAdded.pending, (state) => {
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(postAdded.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.posts.push(payload);
        state.success = true;
      }),
      builder.addCase(postAdded.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      }),
      // getPOST
      builder.addCase(getLatestPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      }),
      builder.addCase(getLatestPost.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.posts = payload;
        state.success = true;
      }),
      builder.addCase(getLatestPost.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  }
});

export default postsSlice.reducer;
