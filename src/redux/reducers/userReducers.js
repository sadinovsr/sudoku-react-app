import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from '../../constants';

const defaultState = {
  isRegistered: false,
  isLoggedIn: false,
  errorMessage: null,
};

export const registerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return { ...state, isRegistered: true, errorMessage: null };
    case REGISTER_ERROR:
      return { ...state, isRegistered: false, errorMessage: action.payload };
    default:
      return state;
  }
}

export const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, isLoggedIn: true, errorMessage: null };
    case LOGIN_ERROR:
      return { ...state, isLoggedIn: false, errorMessage: action.payload };
    default:
      return state;
  }
}