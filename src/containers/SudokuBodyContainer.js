import React, { Component } from "react";
import { connect } from "react-redux";
import SudokuBody from "../components/SudokuBody/SudokuBody";
import { getSudoku, checkSudokuStarted } from "../redux/actions/sudokuActions";
import { getRandomizedSudokuByDifficulty } from "../redux/actions/sudokuActions";
import { Spinner } from 'reactstrap';


class SudokuBodyContainer extends Component {
  constructor(props) {
    super(props);

    if (this.props.location.state) {
      this.returnSudoku(this.props.location.state.sudoku);
    }
  }

  returnSudoku ( sudoku ) {
    if ( localStorage.getItem('token') === null ) {
      this.props.getSudoku(sudoku._id);
    } else {
      this.props
        .checkSudokuStarted(sudoku._id)
        .then( () => {
          if ( this.props.isStarted === false ) {
            this.props.getSudoku(sudoku._id)
          } else {
            this.props.getRandomizedSudokuByDifficulty(sudoku.difficulty)
              .then ( () => {
                this.returnSudoku(this.props.sudoku);
              })
              .catch( error => {
                console.error(error);
              })
          }
        })
    }
  }

  render() {
    const {sudoku} = this.props;
    return (
      (sudoku) ? (
        <SudokuBody sudoku={sudoku} />
      ) : (
        <Spinner />
      )
    );
  }
}

const mapStateToProps = state => {
  return {
    sudoku: state.getSudokuReducer.sudoku,
    isStarted: state.checkSudokuStartedReducer.isStarted
  };
};

const mapDispatchToProps = {
  getSudoku,
  checkSudokuStarted,
  getRandomizedSudokuByDifficulty
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SudokuBodyContainer);