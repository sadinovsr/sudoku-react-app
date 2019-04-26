import React, { Component } from "react";
import { connect } from "react-redux";
import SudokuGrid from "../components/SudokuGrid/SudokuGrid";
import { updateHistoryEntry } from "../redux/actions/historyActions";
import { Spinner } from 'reactstrap';


class SudokuGridContainer extends Component {

  onChangeSave = (sudokuId, newSudoku) => {
    this.props.updateHistoryEntry(sudokuId, newSudoku);
  }

  render() {
    const {sudoku} = this.props;
    if ( this.props.sudoku && this.props.historyEntry ) {
      const { historyEntry } = this.props;
      return (
        (sudoku) ? (
          <SudokuGrid sudoku={sudoku} historyEntry={historyEntry} onChangeSave={this.onChangeSave} />
        ) : (
          <Spinner />
        )
      );
    } else {
      return (
        (sudoku) ? (
          <SudokuGrid sudoku={sudoku} onChangeSave={this.onChangeSave} />
        ) : (
          <Spinner />
        )
      );
    }
  }
}

const mapStateToProps = state => {
  return {
      didUpdate: state.updateHistoryEntryReducer.didUpdate
  };
};

const mapDispatchToProps = {
  updateHistoryEntry
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SudokuGridContainer);