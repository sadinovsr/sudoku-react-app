import React, { Component } from 'react';
import HistoryCardContainer from '../../containers/HistoryCardContainer';
import './HistoryList.css';

class HistoryList extends Component {
  sortArrayByRecentDate = array => {
    array.sort(function(a, b) {
      a = new Date(a.updatedAt);
      b = new Date(b.updatedAt);
      return a>b ? -1 : a<b ? 1 : 0;
    });
    return array;
  }

  render() {
    const { dividedHistory, redirectToSudoku } = this.props;
    let sortedCompletedHistory = [];
    let sortedNotCompletedHistory = [];
    if ( dividedHistory ) {
      sortedCompletedHistory = this.sortArrayByRecentDate(dividedHistory.completedHistory);
      sortedNotCompletedHistory = this.sortArrayByRecentDate(dividedHistory.notCompletedHistory);
    }
    return (
      <div className='HistoryList'>
        <div className='HistoryList__notCompleted'>
          <h2>Started to solve</h2>
          {
            sortedNotCompletedHistory && sortedNotCompletedHistory.map((historyEntry, index) => (
              <HistoryCardContainer key={index} index={index+1} historyEntry={historyEntry} redirectToSudoku={redirectToSudoku} />
            ))
          }
        </div>
        <div className='HistoryList__completed'>
        <h2>Solved</h2>
          {
            sortedCompletedHistory && sortedCompletedHistory.map((historyEntry, index) => (
              <HistoryCardContainer key={index} index={index+1} historyEntry={historyEntry} />
            ))
          }
        </div>
      </div>
    )
  }
}

export default HistoryList;