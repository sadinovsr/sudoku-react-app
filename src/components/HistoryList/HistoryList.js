import React, { Component } from 'react';
import HistoryCardContainer from '../../containers/HistoryCardContainer';
import './HistoryList.css';

class HistoryList extends Component {
  render() {
    const { dividedHistory, redirectToSudoku } = this.props;
    return (
      <div className='HistoryList'>
        <div className='HistoryList__notCompleted'>
          <h2>Started to solve</h2>
          {
            dividedHistory.notCompletedHistory && dividedHistory.notCompletedHistory.map((historyEntry, index) => (
              <HistoryCardContainer key={index} index={index+1} historyEntry={historyEntry} redirectToSudoku={redirectToSudoku} />
            ))
          }
        </div>
        <div className='HistoryList__completed'>
        <h2>Solved</h2>
          {
            dividedHistory.completedHistory && dividedHistory.completedHistory.map((historyEntry, index) => (
              <HistoryCardContainer key={index} index={index+1} historyEntry={historyEntry} />
            ))
          }
        </div>
      </div>
    )
  }
}

export default HistoryList;