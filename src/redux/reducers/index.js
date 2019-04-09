import { combineReducers } from 'redux';
import { getRandomizedSudokuByDifficultyReducer } from './sudokuReducer';

const rootReducer = combineReducers({
  getRandomizedSudokuByDifficultyReducer,
});

export default rootReducer;