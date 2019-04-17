import { combineReducers } from 'redux';
import { loginReducer, registerReducer } from './userReducers';
import { getRandomizedSudokuByDifficultyReducer, getSudokuReducer, checkSudokuStartedReducer } from './sudokuReducer';
import { updateHistoryEntryReducer } from './historyReducer';

const rootReducer = combineReducers({
  loginReducer,
  registerReducer,
  getRandomizedSudokuByDifficultyReducer,
  getSudokuReducer,
  checkSudokuStartedReducer,
  updateHistoryEntryReducer,
});

export default rootReducer;