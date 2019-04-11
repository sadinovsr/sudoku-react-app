import SudokuAPI from '../../helpers/SudokuAPI';
import { API, UPDATE_HISTORY_ENTRY_SUCCESS, UPDATE_HISTORY_ENTRY_ERROR } from '../../constants';

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

/* ---- action creators ---- */

export const updateHistoryEntry = (sudokuId, sudoku) => {
  return dispatch => {
    return SudokuAPI.call('patch', API.UPDATE_HISTORY_ENTRY + sudokuId, { answer: sudoku })
      .then(res => {
        dispatch(updateHistoryEntrySuccess(res));
      })
      .catch(err => {
        dispatch(updateHistoryEntryError());
      })
  }
}