import React, { Component } from "react";
import { connect } from "react-redux";
import HistoryCard from "../components/HistoryCard/HistoryCard";
import { getSudoku } from "../redux/actions/sudokuActions";

class HistoryCardContainer extends Component {

  onContinue = historyEntry => {
    if ( !historyEntry ) {
      return;
    }
    const { redirectToSudoku } = this.props;
    this.props
      .getSudoku(historyEntry.sudokuId)
      .then( () => {
        redirectToSudoku(this.props.sudoku, historyEntry);
      })
      .catch( error => {
        console.error(error);
      })
  }

  render() {
    const { historyEntry, index, key } = this.props;
    
    return (
      (historyEntry) ? (
        <HistoryCard key={key} index={index} historyEntry={historyEntry} onContinue={this.onContinue} />
      ) : (
        <div>Nothing here</div>
      )
    )
  }
}

const mapStateToProps = state => {
  return {
    sudoku: state.getSudokuReducer.sudoku
  };
};

const mapDispatchToProps = {
  getSudoku
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryCardContainer);