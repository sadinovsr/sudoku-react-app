import { 
  GET_RANDOMIZED_SUDOKU_BY_DIFFICULTY_SUCCESS, 
  GET_RANDOMIZED_SUDOKU_BY_DIFFICULTY_ERROR,
  GET_AUTHORIZED_RANDOMIZED_SUDOKU_BY_DIFFICULTY_SUCCESS,
  GET_AUTHORIZED_RANDOMIZED_SUDOKU_BY_DIFFICULTY_ERROR,
  GET_SUDOKU_SUCCESS,
  GET_SUDOKU_ERROR,
  CHECK_SUDOKU_STARTED_SUCCESS,
  CHECK_SUDOKU_STARTED_ERROR
} from '../../constants';

const defaultState = {
  sudoku: null,
  isStarted: false,
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

export const getAuthorizedRandomizedSudokuByDifficultyReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_AUTHORIZED_RANDOMIZED_SUDOKU_BY_DIFFICULTY_SUCCESS:
      return { ...state, sudoku: action.payload };
    case GET_AUTHORIZED_RANDOMIZED_SUDOKU_BY_DIFFICULTY_ERROR:
      return { ...state, sudoku: null };
    default:
      return state;
  }
}

export const getSudokuReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_SUDOKU_SUCCESS:
      return { ...state, sudoku: action.payload };
    case GET_SUDOKU_ERROR:
      return { ...state, sudoku: null };
    default:
      return state;
  }
}

export const checkSudokuStartedReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHECK_SUDOKU_STARTED_SUCCESS:
      return { ...state, isStarted: action.payload.hasHistoryEntry };
    case CHECK_SUDOKU_STARTED_ERROR:
      return { ...state, isStarted: null };
    default:
      return state;
  }
}