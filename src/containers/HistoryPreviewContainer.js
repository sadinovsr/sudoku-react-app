import React, { Component } from "react";
import { connect } from "react-redux";
import HistoryPreview from "../components/HistoryPreview/HistoryPreview";
import { getSudoku } from "../redux/actions/sudokuActions";

class HistoryPreviewContainer extends Component {
  constructor() {
    super();

    this.state = {
      sudoku: null,
    }
  }

  async componentDidMount() {
    const sudokuId = this.props.historyEntry.sudokuId;
    await this.props.getSudoku(sudokuId);
    this.setState({
      sudoku: this.props.sudoku,
    })
  }

  render() {
    const { historyEntry, togglePreview, onContinue } = this.props;
    const { sudoku } = this.state;
    return(
      (sudoku) ? (
        <HistoryPreview sudoku={sudoku} onContinue={onContinue} historyEntry={historyEntry} togglePreview={togglePreview} />
      ) : (
        <React.Fragment/>
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
)(HistoryPreviewContainer);