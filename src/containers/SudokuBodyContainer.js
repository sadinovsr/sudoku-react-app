import React, { Component } from "react";
import { connect } from "react-redux";
import SudokuBody from "../components/SudokuBody/SudokuBody";
import { getSudoku, checkSudokuStarted } from "../redux/actions/sudokuActions";
import { getRandomizedSudokuByDifficulty } from "../redux/actions/sudokuActions";
import { Spinner } from 'reactstrap';


class SudokuBodyContainer extends Component {

  render() {
    if (this.props.location.state && this.props.location.state.historyEntry) {
      const { sudoku, historyEntry } = this.props.location.state;
      return (
        (sudoku && historyEntry) ? (
          <SudokuBody sudoku={sudoku} fromHistory={true} historyEntry={historyEntry} />
        ) : (
          <div className='SudokuSpinner'>
            <Spinner style={{height: '3rem', width: '3rem'}}/>
          </div>
        )
      );
    } else {
      const { sudoku } = this.props.location.state;
      return (
        (sudoku) ? (
          <SudokuBody sudoku={sudoku} />
        ) : (
          <div className='SudokuSpinner'>
            <Spinner style={{height: '3rem', width: '3rem'}}/>
          </div>
        )
      );
    }
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