import { createSlice } from '@reduxjs/toolkit';
import {
  postAdded,
  getLatestPost,
  addComment,
  likePost,
  editPost,
  getAllPosts,
  getMostLikedPost,
  getTopViews,
  readOnePost,
  deletePost
} from './postActions';

const initialState = {
  posts: [],
  loading: false,
  error: null,
  success: false,
  likes: []
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
      // getLatest POST
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
      }),
      // getMostLiked
      builder.addCase(getMostLikedPost.pending, (state) => {
        state.loading = false;
        state.error = null;
      });
    builder.addCase(getMostLikedPost, (state, { payload }) => {
      state.loading = false;
      state.posts = payload;
    });
    builder.addCase(getMostLikedPost.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    // addComment
    builder.addCase(addComment.pending, (state) => {
      (state.loading = true), (state.error = null);
    }),
      builder.addCase(addComment.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.posts.push(payload);
      }),
      builder.addCase(addComment.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      }),
      // EditPost
      builder.addCase(editPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      }),
      builder.addCase(editPost.fulfilled, (state, { payload }) => {
        state.loading = false;
        const { id } = payload;
        const posts = state.posts.filter((post) => post.id !== id);
        state.posts = [posts, payload];
      }),
      builder.addCase(editPost.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      });
    // likePost
    builder.addCase(likePost.pending, (state) => {
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(likePost.fulfilled, (state, { payload }) => {
        state.loading = false;
        // state.posts = payload;
        state.likes.push(payload);
      }),
      builder.addCase(likePost.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
    //getAllPost
    builder.addCase(getAllPosts.pending, (state) => {
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(getAllPosts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.posts = state.posts.concat(payload);
        state.success = true;
      });
    builder.addCase(getAllPosts.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    //readOnePost
    builder.addCase(readOnePost.pending, (state) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(readOnePost.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.posts = payload;
      state.error = null;
    });
    builder.addCase(readOnePost.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    // deletePost
    builder.addCase(deletePost.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deletePost.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.posts.pop(payload);
    });
    builder.addCase(deletePost.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    // getTopViews
    builder.addCase(getTopViews.pending, (state) => {
      state.error = null;
      state.loading = true;
    }),
      builder.addCase(getTopViews.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.posts = payload;
      });
    builder.addCase(getTopViews.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });
  }
});

export default postsSlice.reducer;
