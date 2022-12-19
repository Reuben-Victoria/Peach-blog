import { combineReducers } from 'redux';
import authReducer from './authentication/auth.reducer';

const appReducer = combineReducers({
  auth: authReducer
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
