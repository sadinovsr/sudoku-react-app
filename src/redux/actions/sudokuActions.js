import SudokuAPI from '../../helpers/SudokuAPI';
import {
  API,
  GET_RANDOMIZED_SUDOKU_BY_DIFFICULTY_SUCCESS,
  GET_RANDOMIZED_SUDOKU_BY_DIFFICULTY_ERROR,
  GET_AUTHORIZED_RANDOMIZED_SUDOKU_BY_DIFFICULTY_SUCCESS,
  GET_AUTHORIZED_RANDOMIZED_SUDOKU_BY_DIFFICULTY_ERROR,
  GET_SUDOKU_SUCCESS,
  GET_SUDOKU_ERROR,
  CHECK_SUDOKU_STARTED_SUCCESS,
  CHECK_SUDOKU_STARTED_ERROR
} from '../../constants';

/* -------- actions -------- */

const getRandomizedSudokuByDifficultySuccess = res => {
  return {
    type: GET_RANDOMIZED_SUDOKU_BY_DIFFICULTY_SUCCESS,
    payload: res.data.payload
  }
}

const getRandomizedSudokuByDifficultyError = () => {
  return {
    type: GET_RANDOMIZED_SUDOKU_BY_DIFFICULTY_ERROR
  }
}

const getAuthorizedRandomizedSudokuByDifficultySuccess = res => {
  return {
    type: GET_AUTHORIZED_RANDOMIZED_SUDOKU_BY_DIFFICULTY_SUCCESS,
    payload: res.data.payload
  }
}

const getAuthorizedRandomizedSudokuByDifficultyError = () => {
  return {
    type: GET_AUTHORIZED_RANDOMIZED_SUDOKU_BY_DIFFICULTY_ERROR
  }
}

const getSudokuSuccess = res => {
  return {
    type: GET_SUDOKU_SUCCESS,
    payload: res.data.payload
  }
}

const getSudokuError = () => {
  return {
    type: GET_SUDOKU_ERROR
  }
}

const checkSudokuStartedSuccess = res => {
  return {
    type: CHECK_SUDOKU_STARTED_SUCCESS,
    payload: res.data.payload
  }
}

const checkSudokuStartedError = () => {
  return {
    type: CHECK_SUDOKU_STARTED_ERROR
  }
}

/* ---- action creators ---- */

export const getRandomizedSudokuByDifficulty = difficulty => {
  return dispatch => {
    return SudokuAPI.get(API.GET_RANDOMIZED_SUDOKU_BY_DIFFICULTY + difficulty)
      .then(res => {
        dispatch(getRandomizedSudokuByDifficultySuccess(res));
      })
      .catch(err => {
        dispatch(getRandomizedSudokuByDifficultyError());
      })
  }
}

export const getAuthorizedRandomizedSudokuByDifficulty = difficulty => {
  return dispatch => {
    return SudokuAPI.get(API.GET_AUTHORIZED_RANDOMIZED_SUDOKU_BY_DIFFICULTY + difficulty)
      .then(res => {
        dispatch(getAuthorizedRandomizedSudokuByDifficultySuccess(res));
      })
      .catch(err => {
        dispatch(getAuthorizedRandomizedSudokuByDifficultyError());
      })
  }
}

export const getSudoku = sudokuId => {
  return dispatch => {
    return SudokuAPI.get(API.GET_SUDOKU + sudokuId)
      .then(res => {
        dispatch(getSudokuSuccess(res));
      })
      .catch(err => {
        dispatch(getSudokuError());
      })
  }
}

export const checkSudokuStarted = sudokuId => {
  return dispatch => {
    return SudokuAPI.get(API.HISTORY_ENTRY_EXISTS + sudokuId)
      .then(res => {
        dispatch(checkSudokuStartedSuccess(res));
      })
      .catch(err => {
        dispatch(checkSudokuStartedError());
      })
  }
}