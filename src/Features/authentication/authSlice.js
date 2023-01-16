import { createSlice } from '@reduxjs/toolkit';
import { userSignUp, userLogin, forgotPassword, verifyCode, resetPassword } from './authActions';

const userToken = localStorage.getItem('userToken');
const userInfo = localStorage.getItem('userInfo');
const initialState = {
  loading: false,
  userInfo,
  userToken,
  error: null,
  success: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // SignUp
    builder.addCase(userSignUp.pending, (state) => {
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(userSignUp.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userInfo = payload;
        state.success = true; // registration successful
      }),
      builder.addCase(userSignUp.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      }),
      // LogIn
      builder.addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      }),
      builder.addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
        state.userInfo = payload;
        state.userToken = payload.token;
      }),
      builder.addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      }),
      // ForgotPassword
      builder.addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      }),
      builder.addCase(forgotPassword.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
        state.userInfo = payload;
      }),
      builder.addCase(forgotPassword.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      }),
      // VerifyPassword
      builder.addCase(verifyCode.pending, (state) => {
        state.loading = true;
        state.error = null;
      }),
      builder.addCase(verifyCode.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
        state.userInfo = payload;
      }),
      builder.addCase(verifyCode.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      }),
      // ResetPassword
      builder.addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      }),
      builder.addCase(resetPassword.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
        state.userInfo = payload;
      }),
      builder.addCase(resetPassword.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  }
});

export default authSlice.reducer;
