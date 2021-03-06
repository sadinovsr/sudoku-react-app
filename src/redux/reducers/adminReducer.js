import { 
  GET_ADMIN_DASHBOARD_DATA_SUCCESS,
  GET_ADMIN_DASHBOARD_DATA_ERROR,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
  POST_SUDOKU_SUCCESS,
  POST_SUDOKU_ERROR
} from '../../constants';

const defaultState = {
  adminDashboardData: null,
  isDeleted: false,
  isAdded: false,
}

export const getAdminDashboardDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_ADMIN_DASHBOARD_DATA_SUCCESS:
      return { ...state, adminDashboardData: action.payload };
    case GET_ADMIN_DASHBOARD_DATA_ERROR:
      return { ...state, adminDashboardData: null };
    default:
      return state;
  }
}

export const deleteUserReducer = (state = defaultState, action) => {
  switch (action.type) {
    case DELETE_USER_SUCCESS:
      return { ...state, isDeleted: true };
    case DELETE_USER_ERROR:
      return { ...state, isDeleted: false };
    default:
      return state;
  }
}

export const addSudokuReducer = (state = defaultState, action) => {
  switch (action.type) {
    case POST_SUDOKU_SUCCESS:
      return { ...state, isAdded: true };
    case POST_SUDOKU_ERROR:
      return { ...state, isAdded: false };
    default:
      return state;
  }
}