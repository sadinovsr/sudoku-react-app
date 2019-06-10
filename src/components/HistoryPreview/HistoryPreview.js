import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './HistoryPreview.css';
import { Spinner } from 'reactstrap';

class HistoryPreview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sudokuAnswer: this.props.historyEntry.answer.split(''),
      initialSudoku: this.props.sudoku.sudoku.split(''),
      table: null,
    }
  }

  convertDate = (date) => {
    const newDate = new Date(date);
    const stringDate = newDate.toString();
    return stringDate.slice(4, 16);
  }

  formatTime = time => {
    var minutes = "0" + Math.floor(time / 60);
    var seconds = "0" + (time - minutes * 60);
    return minutes.substr(-2) + ":" + seconds.substr(-2);
  }

  generateRow = index => {
    const { sudokuAnswer, initialSudoku } = this.state;
    let row = [];
    for (let j = (index - 1) * 9; j < index * 9; j++ ) {
      if ( sudokuAnswer[j] === '0' ) {
        row.push(<td key={j}>{' '}</td>);
      } else {
        if ( initialSudoku[j] === '0' ) {
          row.push(<td key={j}>{sudokuAnswer[j]}</td>);
        } else {
          row.push(<td key={j} style={{color: 'dodgerblue'}}>{sudokuAnswer[j]}</td>);
        }
      }
    }
    return row;
  }

  generateTable = () => {
    let table = [];
    for (let i = 1 ; i <= 9; i++) {
      table.push(
        <tr key={'r' + i}>
          { this.generateRow(i) }
        </tr>
      )
    }
    this.setState({
      table: table,
    });
  }

  calculateCompletion = () => {
    let answerZeros = 0;
    let initialZeros = 0;
    this.state.sudokuAnswer.forEach(element => {
      if ( element === '0' ) { answerZeros++ }
    });
    this.state.initialSudoku.forEach(element => {
      if ( element === '0' ) { initialZeros++ }
    });
    return Math.round(((initialZeros-answerZeros)/initialZeros)*1000)/10;
  }

  componentDidMount() {
    this.generateTable();
  }

  render() {
    const { historyEntry, togglePreview, onContinue } = this.props;
    const { sudokuAnswer, initialSudoku, table } = this.state;
    return (
      <div className='HistoryPreview'>
        <div className='HistoryPreview__content'>
          <div className='HistoryPreview__content__info'>
            <div className='HistoryPreview__content__info__block'>
              <div className='HistoryPreview__content__info__label'>Difficulty:</div>
              <div className='HistoryPreview__content__info__text'>{historyEntry.difficulty}</div>
            </div>
            <div className='HistoryPreview__content__info__block'>
              <div className='HistoryPreview__content__info__label'>Time:</div>
              <div className='HistoryPreview__content__info__text'>{this.formatTime(historyEntry.time)}</div>
            </div>
            <div className='HistoryPreview__content__info__block'>
              <div className='HistoryPreview__content__info__label'>{( historyEntry.completed ) ? ( 'Completed on:' ) : ( 'Last updated:' )}</div>
              <div className='HistoryPreview__content__info__text'>{this.convertDate(historyEntry.updatedAt)}</div>
            </div>
            <div className='HistoryPreview__content__info__block'>
              <div className='HistoryPreview__content__info__label'>Completion:</div>
              <div className='HistoryPreview__content__info__text'>{this.calculateCompletion()}%</div>
            </div>
            {
              ( historyEntry.completed ) ? (
                <div className='HistoryPreview__content__info__block'>
                  <div className='HistoryPreview__content__info__label'>Used solve:</div>
                  <div className='HistoryPreview__content__info__text'>{ (historyEntry.usedSolve) ? ( 'True' ) : ( 'False' ) }</div>
                </div>
              ) : (
                <React.Fragment />
              )
            }
          </div>
          <div className='HistoryPreview__content__preview'>
            {
              (sudokuAnswer && initialSudoku) ? (
                (table) ? (
                  <table className='HistoryPreview__table'>
                    <tbody>
                      {table}
                    </tbody>
                  </table>
                ) : (
                  <Spinner />
                )
              ) : (
                <React.Fragment />
              )
            }
          </div>
          <div className='HistoryPreview__content__info__buttons'>
            <Button onClick={() => togglePreview()}>Close</Button>
            {
              ( historyEntry.completed ) ? (
                <React.Fragment />
              ) : (
                <Button onClick={() => onContinue(historyEntry)}>Continue</Button>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default HistoryPreview;