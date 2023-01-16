import { combineReducers } from 'redux';
import postsReducer from '../Features/posts/postsSlice';
import authSlice from './authentication/authSlice';
import usersSlice from './users/usersSlice';
const appReducer = combineReducers({
  post: postsReducer,
  auth: authSlice,
  users: usersSlice
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
