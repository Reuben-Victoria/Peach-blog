import { createSlice } from '@reduxjs/toolkit';
import { UPDATEUSER } from './usersActions';

const initialState = {
  loading: false,
  userInfo: null,
  error: null,
  success: false
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(UPDATEUSER.pending, (state) => {
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(UPDATEUSER.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userInfo = payload;
        state.success = true;
      }),
      builder.addCase(UPDATEUSER.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  }
});

export default usersSlice.reducer;
