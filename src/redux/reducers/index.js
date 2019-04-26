import { combineReducers } from 'redux';
import { loginReducer, logoutReducer, registerReducer, getUserSelfReducer } from './userReducers';
import { getRandomizedSudokuByDifficultyReducer, getSudokuReducer, checkSudokuStartedReducer } from './sudokuReducer';
import { updateHistoryEntryReducer, getDividedHistoryEntriesReducer } from './historyReducer';

const rootReducer = combineReducers({
  loginReducer,
  logoutReducer,
  registerReducer,
  getUserSelfReducer,
  getRandomizedSudokuByDifficultyReducer,
  getSudokuReducer,
  checkSudokuStartedReducer,
  updateHistoryEntryReducer,
  getDividedHistoryEntriesReducer,
});

export default rootReducer;