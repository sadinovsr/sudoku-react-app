import { 
  GET_RANDOMIZED_SUDOKU_BY_DIFFICULTY_SUCCESS, 
  GET_RANDOMIZED_SUDOKU_BY_DIFFICULTY_ERROR 
} from '../../constants';

const defaultState = {
  sudoku: null
}

export const getRandomizedSudokuByDifficultyReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_RANDOMIZED_SUDOKU_BY_DIFFICULTY_SUCCESS:
      return { ...state, sudoku: action.payload };
    case GET_RANDOMIZED_SUDOKU_BY_DIFFICULTY_ERROR:
      return { ...state, sudoku: null };
    default:
      return state;
  }
}