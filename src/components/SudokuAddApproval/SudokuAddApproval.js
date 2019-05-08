import React, { Component } from "react";
import { Button } from 'reactstrap';
import "./SudokuAddApproval.css";

class SudokuAddApproval extends Component {
  render() {
    const { onClose, handleSave } = this.props;

    return (
      <div className="SudokuAddApproval">
        <div className="SudokuAddApproval__content">
          <div className='SudokuAddApproval__content__text'>
            ! DISCLAIMER !<br/>It is your responsibility to know whether sudoku is solvable. DO NOT add sudoku if you are not sure about that!
          </div>
          <div className='SudokuAddApproval__content__text'>
            Answer this simple question: Did I check that this sudoku is solvable?
          </div>
          <div className="SudokuAddApproval__buttons">
            <Button onClick={onClose} color='danger'>NO, I did not!</Button>
            <Button onClick={() => handleSave()} color='success'>YES, I did!</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default SudokuAddApproval;