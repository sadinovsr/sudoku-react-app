import { combineReducers } from 'redux';
import { loginReducer, registerReducer, getUserSelfReducer } from './userReducers';
import { getRandomizedSudokuByDifficultyReducer, getAuthorizedRandomizedSudokuByDifficultyReducer, getSudokuReducer, checkSudokuStartedReducer } from './sudokuReducer';
import { updateHistoryEntryReducer, getDividedHistoryEntriesReducer, getHistoryStatisticsReducer } from './historyReducer';
import { getAdminDashboardDataReducer } from './adminReducer';

const rootReducer = combineReducers({
  loginReducer,
  registerReducer,
  getUserSelfReducer,
  getRandomizedSudokuByDifficultyReducer,
  getAuthorizedRandomizedSudokuByDifficultyReducer,
  getSudokuReducer,
  checkSudokuStartedReducer,
  updateHistoryEntryReducer,
  getDividedHistoryEntriesReducer,
  getHistoryStatisticsReducer,
  getAdminDashboardDataReducer,
});

export default rootReducer;