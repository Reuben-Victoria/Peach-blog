import authTypes from '../types';

const initialValues = {
  login: {}
};

const authReducer = (state = initialValues, action) => {
  switch (action.type) {
    case authTypes.SAVE_LOGIN:
      return {
        ...state,
        login: action.payload
      };

    default:
      return state;
  }
};

export default authReducer;
