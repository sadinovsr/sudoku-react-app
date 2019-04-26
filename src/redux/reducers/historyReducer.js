import { 
  UPDATE_HISTORY_ENTRY_SUCCESS, 
  UPDATE_HISTORY_ENTRY_ERROR,
  GET_DIVIDED_HISTORY_SUCCESS,
  GET_DIVIDED_HISTORY_ERROR,
} from '../../constants';

const defaultState = {
  didUpdate: false,
  dividedHistory: null,
}

export const updateHistoryEntryReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_HISTORY_ENTRY_SUCCESS:
      return { ...state, didUpdate: true };
    case UPDATE_HISTORY_ENTRY_ERROR:
      return { ...state, didUpdate: false };
    default:
      return state;
  }
}

export const getDividedHistoryEntriesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_DIVIDED_HISTORY_SUCCESS:
      return { ...state, dividedHistory: action.payload };
    case GET_DIVIDED_HISTORY_ERROR:
      return { ...state, dividedHistory: null };
    default:
      return state;
  }
}