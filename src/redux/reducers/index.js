import { combineReducers } from 'redux';
import { loginReducer, registerReducer } from './userReducers';

const rootReducer = combineReducers({
  loginReducer,
  registerReducer
});

export default rootReducer;