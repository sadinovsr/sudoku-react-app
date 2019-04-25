import React, { Component } from "react";
import { connect } from "react-redux";
import DifficultyList from "../components/DifficultyList/DifficultyList";
import { getRandomizedSudokuByDifficulty } from "../redux/actions/sudokuActions";

class DifficultyListContainer extends Component {

  onDifficultySelect = ( difficulty ) => {
    console.log(`selected ${difficulty} difficulty`);
    this.props
      .getRandomizedSudokuByDifficulty(difficulty)
      .then( () => {
        console.log('got randomized sudoku');
        console.log(this.props.sudoku);
        this.props.history.push({
          pathname: '/sudoku',
          state: { sudoku: this.props.sudoku }
        })
      })
      .catch( error => {
        console.error(error);
      })
  }

  render() {
    return (
      <DifficultyList onDifficultySelect={this.onDifficultySelect} />
    );
  }
}

const mapStateToProps = state => {
  return {
    sudoku: state.getRandomizedSudokuByDifficultyReducer.sudoku
  };
};

const mapDispatchToProps = {
  getRandomizedSudokuByDifficulty
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DifficultyListContainer);