import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  GET_USER_SELF_SUCCESS,
  GET_USER_SELF_ERROR,
} from '../../constants';

const defaultState = {
  isRegistered: false,
  isLoggedIn: false,
  errorMessage: null,
  user: null,
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

export const logoutReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGOUT_SUCCESS:
      return { ...state, isLoggedIn: false };
    case LOGOUT_ERROR: 
      return { ...state, isLoggedIn: true };
    default:
      return state;
  }
}

export const getUserSelfReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_USER_SELF_SUCCESS:
      return { ...state, user: action.payload };
    case GET_USER_SELF_ERROR:
      return { ...state, user: null };
    default:
      return state;
  }
}