import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './DifficultyList.css';

class DifficultyList extends Component {
  render() {
    const { onDifficultySelect } = this.props;
    return (
      <div className="DifficultyList">
        <div className="DifficultyList__header">
          Start new sudoku
        </div>
        <div className="DifficultyList__body">
          <Button className="DifficultyList__body__button color-easy" onClick={() => onDifficultySelect('easy')} size="lg" block>EASY</Button>
          <Button className="DifficultyList__body__button color-medium" onClick={() => onDifficultySelect('medium')} size="lg" block>MEDIUM</Button>
          <Button className="DifficultyList__body__button color-hard" onClick={() => onDifficultySelect('hard')} size="lg" block>HARD</Button>
          <Button className="DifficultyList__body__button color-veryhard" onClick={() => onDifficultySelect('very hard')} size="lg" block>VERY HARD</Button>
        </div>
      </div>
    )
  }
}

export default DifficultyList;