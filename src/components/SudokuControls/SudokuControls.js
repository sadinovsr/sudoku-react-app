import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './SudokuControls.css';

class SudokuControls extends Component {
  render() {
    return (
      <div className='SudokuControls'>
        <Button className='SudokuControls__button'>Check</Button>
        <Button className='SudokuControls__button'>Solve</Button>
      </div>
    )
  }
}

export default SudokuControls;