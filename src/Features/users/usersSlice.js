import { createSlice } from '@reduxjs/toolkit';
import { UPDATEUSER, GETPROFILE, DELETEUSER } from './usersActions';

const initialState = {
  loading: false,
  userData: [],
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
        state.userData.push(payload);
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
      }),
      // DELETEUSER

      builder.addCase(DELETEUSER.pending, (state) => {
        state.loading = true;
        state.error = null;
      }),
      builder.addCase(DELETEUSER.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userData.pop(payload);
        state.success = true;
      }),
      builder.addCase(DELETEUSER.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      });
  }
});

export const selectUserById = (state, userId) => {
  state.userData.find((userData) => userData.user_id === userId);
};

export default usersSlice.reducer;
