import CryptoJS from 'crypto-js';
import SudokuAPI from '../../helpers/SudokuAPI';
import {
  API,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  GET_USER_SELF_SUCCESS,
  GET_USER_SELF_ERROR,
} from '../../constants';

/* ------ actions ------ */

const registerSuccess = () => {
  return {
    type: REGISTER_SUCCESS,
  }
}

const registerError = message => {
  
  let newMessage = message.replace('User validation failed: ', '');
  newMessage = newMessage.replace(/"/g, '');
  newMessage = newMessage.split(', ');
  for ( let i = 0; i < newMessage.length; i++ ) {
    newMessage[i] = newMessage[i].replace(/([a-zA-Z])+: /, '');
  }

  return {
    type: REGISTER_ERROR,
    payload: newMessage
  }
}

const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  }
}

const loginError = message => {
  return {
    type: LOGIN_ERROR,
    payload: message
  }
}

const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
  }
}

const logoutError = () => {
  return {
    type: LOGOUT_ERROR,
  }
}

const getUserSelfSuccess = res => {
  return {
    type: GET_USER_SELF_SUCCESS,
    payload: res.data.payload,
  }
}

const getUserSelfError = () => {
  return {
    type: GET_USER_SELF_ERROR,
  }
}

/* ------ action creators ------ */

export const register = (username, email, password) => {
  return dispatch => {
    return SudokuAPI.post(API.REGISTER, {
      username,
      email,
      password: CryptoJS.SHA256(password).toString()
    })
      .then(() => dispatch(registerSuccess()))
      .catch( e => dispatch( registerError( JSON.stringify( e.response.data.error ) ) ) );
  }
}

export const login = (username, password) => {
  return dispatch => {
    return SudokuAPI.post(API.LOGIN, {
      username,
      password: CryptoJS.SHA256(password).toString()
    })
      .then(res => {
        const token = res.data.payload.token

        localStorage.setItem('token', token);
        dispatch(loginSuccess());
      })
      .catch( e => dispatch( loginError( JSON.stringify( e.response.data.error ) ) ) );
  }
}

export const logout = () => {
  return dispatch => {
    if ( localStorage.getItem('token') ) {
      localStorage.removeItem('token');
      return dispatch(logoutSuccess());
    } else {
      return dispatch(logoutError());
    }    
  }
}

export const getUserSelf = () => {
  return dispatch => {
    return SudokuAPI.get(API.GET_USER_SELF)
      .then( res => dispatch( getUserSelfSuccess( res ) ) )
      .catch( () => dispatch( getUserSelfError() ) );
  }
}