import SudokuAPI from '../../helpers/SudokuAPI';
import {
  API,
  UPDATE_HISTORY_ENTRY_SUCCESS,
  UPDATE_HISTORY_ENTRY_ERROR,
  GET_DIVIDED_HISTORY_SUCCESS,
  GET_DIVIDED_HISTORY_ERROR,
  GET_HISTORY_STATISTICS_SUCCESS,
  GET_HISTORY_STATISTICS_ERROR,
} from '../../constants';

/* -------- actions -------- */

const updateHistoryEntrySuccess = res => {
  return {
    type: UPDATE_HISTORY_ENTRY_SUCCESS,
    payload: res.data.payload
  }
}

const updateHistoryEntryError = () => {
  return {
    type: UPDATE_HISTORY_ENTRY_ERROR
  }
}

const getDividedHistoryEntriesSuccess = res => {
  return {
    type: GET_DIVIDED_HISTORY_SUCCESS,
    payload: res.data.payload
  }
}

const getDividedHistoryEntriesError = () => {
  return {
    type: GET_DIVIDED_HISTORY_ERROR
  }
}

const getHistoryStatisticsSuccess = res => {
  return {
    type: GET_HISTORY_STATISTICS_SUCCESS,
    payload: res.data.payload
  }
}

const getHistoryStatisticsError = () => {
  return {
    type: GET_HISTORY_STATISTICS_ERROR
  }
}

/* ---- action creators ---- */

export const updateHistoryEntry = (sudokuId, sudokuObject) => {
  return dispatch => {
    return SudokuAPI.call('patch', API.UPDATE_HISTORY_ENTRY + sudokuId, sudokuObject)
      .then(res => {
        dispatch(updateHistoryEntrySuccess(res));
      })
      .catch(err => {
        dispatch(updateHistoryEntryError());
      })
  }
}

export const getDividedHistoryEntries = () => {
  return dispatch => {
    return SudokuAPI.get(API.GET_DIVIDED_HISTORY)
      .then(res => {
        dispatch( getDividedHistoryEntriesSuccess( res ) );
      })
      .catch(err => {
        dispatch( getDividedHistoryEntriesError() );
      })
  }
}

export const getHistoryStatistics = () => {
  return dispatch => {
    return SudokuAPI.get(API.GET_HISTORY_STATISTICS)
      .then(res => {
        dispatch( getHistoryStatisticsSuccess( res ) );
      })
      .catch(err => {
        dispatch( getHistoryStatisticsError() );
      })
  }
}