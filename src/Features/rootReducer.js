import { combineReducers } from 'redux';
import postsReducer from '../Features/posts/postsSlice';
import authSlice from './authentication/authSlice';
const appReducer = combineReducers({
  post: postsReducer,
  auth: authSlice
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
