export const API = {
  LOGIN: 'auth/login',
  REGISTER: 'auth/register',
  GET_USER_SELF: 'users/self',
  GET_SUDOKU: 'sudoku/',
  GET_DIVIDED_HISTORY: 'history/divided',
  HISTORY_ENTRY_EXISTS: 'history/sudoku/',
  UPDATE_HISTORY_ENTRY: 'history/',
  GET_RANDOMIZED_SUDOKU_BY_DIFFICULTY: 'sudoku/random/difficulty/',
  GET_AUTHORIZED_RANDOMIZED_SUDOKU_BY_DIFFICULTY: 'sudoku/random/auth/difficulty/',
};

export const GET_RANDOMIZED_SUDOKU_BY_DIFFICULTY_SUCCESS = 'GET_RANDOMIZED_SUDOKU_BY_DIFFICULTY_SUCCESS';
export const GET_RANDOMIZED_SUDOKU_BY_DIFFICULTY_ERROR = 'GET_RANDOMIZED_SUDOKU_BY_DIFFICULTY_ERROR';

export const GET_AUTHORIZED_RANDOMIZED_SUDOKU_BY_DIFFICULTY_SUCCESS = 'GET_AUTHORIZED_RANDOMIZED_SUDOKU_BY_DIFFICULTY_SUCCESS';
export const GET_AUTHORIZED_RANDOMIZED_SUDOKU_BY_DIFFICULTY_ERROR = 'GET_AUTHORIZED_RANDOMIZED_SUDOKU_BY_DIFFICULTY_ERROR';

export const GET_SUDOKU_SUCCESS = 'GET_SUDOKU_SUCCESS';
export const GET_SUDOKU_ERROR = 'GET_SUDOKU_ERROR';

export const CHECK_SUDOKU_STARTED_SUCCESS = 'CHECK_SUDOKU_STARTED_SUCCESS';
export const CHECK_SUDOKU_STARTED_ERROR = 'CHECK_SUDOKU_STARTED_ERROR';

export const UPDATE_HISTORY_ENTRY_SUCCESS = 'UPDATE_HISTORY_ENTRY_SUCCESS';
export const UPDATE_HISTORY_ENTRY_ERROR = 'UPDATE_HISTORY_ENTRY_ERROR';

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';

export const GET_USER_SELF_SUCCESS = 'GET_USER_SELF_SUCCESS';
export const GET_USER_SELF_ERROR = 'GET_USER_SELF_ERROR';

export const GET_DIVIDED_HISTORY_SUCCESS = 'GET_DIVIDED_HISTORY_SUCCESS';
export const GET_DIVIDED_HISTORY_ERROR = 'GET_DIVIDED_HISTORY_ERROR';
