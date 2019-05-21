import React, { Component } from "react";
import { connect } from "react-redux";
import DifficultyList from "../components/DifficultyList/DifficultyList";
import { getAuthorizedRandomizedSudokuByDifficulty, getRandomizedSudokuByDifficulty } from "../redux/actions/sudokuActions";

class DifficultyListContainer extends Component {

  onDifficultySelect = ( difficulty ) => {
    if ( localStorage.getItem('token') ) {
      this.props
      .getAuthorizedRandomizedSudokuByDifficulty(difficulty)
      .then( () => {
        if ( this.props.sudokuAuth ) {
          this.props.history.push({
            pathname: '/sudoku',
            state: { sudoku: this.props.sudokuAuth }
          })
        } else {
          this.props.history.push({
            pathname: '/sudoku',
            state: { errorMessage: `You have started/solved all ${difficulty} sudokus!` }
          })
        }
      })
      .catch( error => {
        console.error(error);
      })
    } else {
      this.props
      .getRandomizedSudokuByDifficulty(difficulty)
      .then( () => {
        this.props.history.push({
          pathname: '/sudoku',
          state: { sudoku: this.props.sudoku }
        })
      })
      .catch( error => {
        console.error(error);
      })
    }
  }

  render() {
    return (
      <DifficultyList onDifficultySelect={this.onDifficultySelect} />
    );
  }
}

const mapStateToProps = state => {
  return {
    sudoku: state.getRandomizedSudokuByDifficultyReducer.sudoku,
    sudokuAuth: state.getAuthorizedRandomizedSudokuByDifficultyReducer.sudoku
  };
};

const mapDispatchToProps = {
  getRandomizedSudokuByDifficulty,
  getAuthorizedRandomizedSudokuByDifficulty,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DifficultyListContainer);