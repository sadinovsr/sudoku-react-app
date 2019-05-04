import SudokuAPI from '../../helpers/SudokuAPI';
import {
  API,
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