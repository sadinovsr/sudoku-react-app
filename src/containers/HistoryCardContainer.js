import React, { Component } from "react";
import { connect } from "react-redux";
import HistoryCard from "../components/HistoryCard/HistoryCard";
import { getSudoku } from "../redux/actions/sudokuActions";
import { Spinner } from 'reactstrap';

class HistoryCardContainer extends Component {

  onContinue = sudokuId => {
    if ( !sudokuId ) {
      return;
    }
    console.log(sudokuId);
  }

  render() {
    const { historyEntry, index, key } = this.props;
    
    return (
      (historyEntry) ? (
        <HistoryCard key={index} index={index} historyEntry={historyEntry} onContinue={this.onContinue} />
      ) : (
        <div>Nothing here</div>
      )
    )
  }
}

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryCardContainer);