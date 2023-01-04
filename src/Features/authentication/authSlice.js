import { createSlice } from '@reduxjs/toolkit';
import { userSignUp, userLogin, forgotPassword, verifyCode, resetPassword } from './authActions';

const userToken = localStorage.getItem('userToken');
const initialState = {
  loading: false,
  userInfo: null,
  userToken,
  error: null,
  success: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    // SignUp
    [userSignUp.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userSignUp.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      state.success = true; // registration successful
    },
    [userSignUp.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    // LogIn
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      state.userToken = payload.userToken;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    // ForgotPassword
    [forgotPassword.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [forgotPassword.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
    },
    [forgotPassword.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    // VerifyPassword
    [verifyCode.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [verifyCode.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
    },
    [verifyCode.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    // ResetPassword
    [resetPassword.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [resetPassword.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
    },
    [resetPassword.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    }
  }
});

export default authSlice.reducer;
