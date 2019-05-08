import { combineReducers } from 'redux';
import { loginReducer, registerReducer, getUserSelfReducer, updateUserReducer } from './userReducers';
import { getRandomizedSudokuByDifficultyReducer, getAuthorizedRandomizedSudokuByDifficultyReducer, getSudokuReducer, checkSudokuStartedReducer } from './sudokuReducer';
import { updateHistoryEntryReducer, getDividedHistoryEntriesReducer, getHistoryStatisticsReducer } from './historyReducer';
import { getAdminDashboardDataReducer, deleteUserReducer, addSudokuReducer } from './adminReducer';

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
  deleteUserReducer,
  addSudokuReducer,
  updateUserReducer,
});

export default rootReducer;