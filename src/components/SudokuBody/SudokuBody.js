import React, { Component } from 'react';
// import SudokuGrid from '../SudokuGrid/SudokuGrid.js';
import SudokuGridContainer from '../../containers/SudokuGridContainer.js';
// import SudokuControls from '../SudokuControls/SudokuControls.js';
import './SudokuBody.css';

class SudokuBody extends Component {
  render() {
    const {sudoku} = this.props;
    return (
      <div className='SudokuBody'>
        <div className='SudokuBody__grid'>
          <SudokuGridContainer sudoku={sudoku} />
          {/* <SudokuGrid sudoku={sudoku}/> */}
        </div>
      </div>
    )
  }
}

export default SudokuBody;