import { combineReducers } from 'redux';
import postsReducer from 'features/posts/postsSlice';
import authSlice from 'features/authentication/authSlice';
import usersSlice from 'features/users/usersSlice';
const appReducer = combineReducers({
  post: postsReducer,
  auth: authSlice,
  users: usersSlice
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
