import SudokuAPI from '../../helpers/SudokuAPI';
import { API, GET_RANDOMIZED_SUDOKU_BY_DIFFICULTY_SUCCESS, GET_RANDOMIZED_SUDOKU_BY_DIFFICULTY_ERROR } from '../../constants';

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

/* ---- action creators ---- */

export const getRandomizedSudokuByDifficulty = difficulty => {
  return dispatch => {
    return SudokuAPI.get(API.GET_RANDOMIZED_SUDOKU_BY_DIFFICULTY+difficulty)
      .then(res => {
        dispatch(getRandomizedSudokuByDifficultySuccess(res));
      })
      .catch(err => {
        dispatch(getRandomizedSudokuByDifficultyError());
      })
  }
}