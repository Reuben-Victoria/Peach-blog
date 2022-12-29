import { combineReducers } from 'redux';
import postsReducer from '../Features/posts/postsSlice';
import userSlice from './authentication/authSlice';

const appReducer = combineReducers({
  post: postsReducer,
  user: userSlice
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
