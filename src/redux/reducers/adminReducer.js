import { 
  GET_ADMIN_DASHBOARD_DATA_SUCCESS,
  GET_ADMIN_DASHBOARD_DATA_ERROR
} from '../../constants';

const defaultState = {
  adminDashboardData: null
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