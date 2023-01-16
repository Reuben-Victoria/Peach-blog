import { createSlice } from '@reduxjs/toolkit';
import { UPDATEUSER, GETPROFILE } from './usersActions';

const initialState = {
  loading: false,
  userData: null,
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
      state.error = false;
    }),
      builder.addCase(UPDATEUSER.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userData = payload;
        state.success = true;
        state.error = false;
      }),
      builder.addCase(UPDATEUSER.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      }),
      // GETPROFILE

      builder.addCase(GETPROFILE.pending, (state) => {
        state.loading = true;
        state.error = false;
      }),
      builder.addCase(GETPROFILE.fulfilled, (state, { payload }) => {
        state.userData = payload;
        state.success = true;
        state.loading = false;
      }),
      builder.addCase(GETPROFILE, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      });
  }
});

export default usersSlice.reducer;
