import SudokuAPI from '../../helpers/SudokuAPI';
import {
  API,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
  GET_ADMIN_DASHBOARD_DATA_SUCCESS,
  GET_ADMIN_DASHBOARD_DATA_ERROR,
} from '../../constants';

/* -------- actions -------- */

const getAdminDashboardDataSuccess = res => {
  return {
    type: GET_ADMIN_DASHBOARD_DATA_SUCCESS,
    payload: res.data.payload
  }
}

const getAdminDashboardDataError = () => {
  return {
    type: GET_ADMIN_DASHBOARD_DATA_ERROR
  }
}

const deleteUserSuccess = res => {
  return {
    type: DELETE_USER_SUCCESS,
    payload: res.payload,
  }
}

const deleteUserError = () => {
  return {
    type: DELETE_USER_ERROR,
  }
}

/* ---- action creators ---- */

export const getAdminDashboardData = () => {
  return dispatch => {
    return SudokuAPI.get(API.GET_ADMIN_DASHBOARD_DATA)
      .then(res => {
        dispatch(getAdminDashboardDataSuccess(res));
      })
      .catch(err => {
        dispatch(getAdminDashboardDataError());
      })
  }
}

export const deleteUser = userId => {
  return dispatch => {
    return SudokuAPI.delete(API.DELETE_USER + userId)
      .then(res => {
        dispatch(deleteUserSuccess(res));
      })
      .catch(err => {
        dispatch(deleteUserError());
      })
  }
}