import { 
  UPDATE_HISTORY_ENTRY_SUCCESS, 
  UPDATE_HISTORY_ENTRY_ERROR,
} from '../../constants';

const defaultState = {
  didUpdate: false
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