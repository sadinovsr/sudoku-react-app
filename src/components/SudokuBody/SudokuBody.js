import React, { Component } from 'react';
import SudokuGrid from '../SudokuGrid/SudokuGrid.js';
import SudokuControls from '../SudokuControls/SudokuControls.js';
import './SudokuBody.css';

class SudokuBody extends Component {
  render() {
    const {sudoku} = this.props.location.state;
    return (
      <div className='SudokuBody'>
        <div className='SudokuBody__grid'>
          <SudokuGrid sudoku={sudoku}/>
        </div>
        <div className='SudokuBody__controls'>
          <SudokuControls />
        </div>
      </div>
    )
  }
}

export default SudokuBody;