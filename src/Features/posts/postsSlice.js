import { createSlice } from '@reduxjs/toolkit';
import { postAdded } from './postActions';

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
    builder.addCase(postAdded.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.posts.push(payload);
    });
  }
});

export default postsSlice.reducer;
