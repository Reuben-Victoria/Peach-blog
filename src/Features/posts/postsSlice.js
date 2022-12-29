import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    title: 'Grey home',
    subtitle: 'Yaay',
    post: 'Greay',
    stamp: 'Dec 12',
    id: ''
  },
  {
    title: 'Grey home',
    subtitle: 'Yaay',
    post: 'Greay',
    stamp: 'Dec 12',
    id: ''
  }
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    }
  }
});

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
