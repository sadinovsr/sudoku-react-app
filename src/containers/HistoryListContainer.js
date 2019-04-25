import React, { Component } from "react";
import { connect } from "react-redux";
import HistoryList from "../components/HistoryList/HistoryList";
import { getDividedHistoryEntries } from "../redux/actions/historyActions";
import { Spinner } from 'reactstrap';

class HistoryListContainer extends Component {

  componentDidMount() {
    this.props.getDividedHistoryEntries();
  }

  render() {
    const { dividedHistory } = this.props;
    
    if ( dividedHistory ) {
      return (
        <HistoryList dividedHistory={dividedHistory} />
      );
    }
    return (
      <Spinner size='lg' />
    );
  }
}

const mapStateToProps = state => {
  return {
    dividedHistory: state.getDividedHistoryEntriesReducer.dividedHistory
  };
};

const mapDispatchToProps = {
  getDividedHistoryEntries
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryListContainer);