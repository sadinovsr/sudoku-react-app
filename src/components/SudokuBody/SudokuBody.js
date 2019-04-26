import React, { Component } from 'react';
import SudokuGridContainer from '../../containers/SudokuGridContainer.js';
import './SudokuBody.css';

class SudokuBody extends Component {
  render() {
    const {sudoku} = this.props;
    if ( this.props.sudoku && this.props.historyEntry ) {
      const { historyEntry } = this.props;
      return (
        <div className='SudokuBody'>
          <div className='SudokuBody__grid'>
            <SudokuGridContainer sudoku={sudoku} historyEntry={historyEntry} />
          </div>
        </div>
      )
    } else {
      return (
        <div className='SudokuBody'>
          <div className='SudokuBody__grid'>
            <SudokuGridContainer sudoku={sudoku} />
          </div>
        </div>
      )
    }

  }
}

export default SudokuBody;