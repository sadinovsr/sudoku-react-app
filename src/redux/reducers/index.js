import { combineReducers } from 'redux';
import { loginReducer, logoutReducer, registerReducer, getUserSelfReducer } from './userReducers';
import { getRandomizedSudokuByDifficultyReducer, getAuthorizedRandomizedSudokuByDifficultyReducer, getSudokuReducer, checkSudokuStartedReducer } from './sudokuReducer';
import { updateHistoryEntryReducer, getDividedHistoryEntriesReducer, getHistoryStatisticsReducer } from './historyReducer';

const rootReducer = combineReducers({
  loginReducer,
  logoutReducer,
  registerReducer,
  getUserSelfReducer,
  getRandomizedSudokuByDifficultyReducer,
  getAuthorizedRandomizedSudokuByDifficultyReducer,
  getSudokuReducer,
  checkSudokuStartedReducer,
  updateHistoryEntryReducer,
  getDividedHistoryEntriesReducer,
  getHistoryStatisticsReducer,
});

export default rootReducer;