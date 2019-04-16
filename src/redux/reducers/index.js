import { combineReducers } from 'redux';
import { getRandomizedSudokuByDifficultyReducer, getSudokuReducer, checkSudokuStartedReducer } from './sudokuReducer';
import { updateHistoryEntryReducer } from './historyReducer';

const rootReducer = combineReducers({
  getRandomizedSudokuByDifficultyReducer,
  getSudokuReducer,
  checkSudokuStartedReducer,
  updateHistoryEntryReducer,
});

export default rootReducer;