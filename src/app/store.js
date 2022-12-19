import { configureStore } from '@reduxjs/toolkit';
import useReducer from '../Redux/authentication/user.slice';

const store = configureStore({
  reducer: {
    user: useReducer
  }
});

export default store;
