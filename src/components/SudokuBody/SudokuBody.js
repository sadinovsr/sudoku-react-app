import React, { Component } from 'react';
import SudokuGridContainer from '../../containers/SudokuGridContainer.js';
import './SudokuBody.css';

class SudokuBody extends Component {
  render() {
    const {sudoku} = this.props;
    return (
      <div className='SudokuBody'>
        <div className='SudokuBody__grid'>
          <SudokuGridContainer sudoku={sudoku} />
        </div>
      </div>
    )
  }
}

export default SudokuBody;