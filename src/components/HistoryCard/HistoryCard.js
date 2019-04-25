import React, { Component } from 'react';
import { Card, Button } from 'reactstrap';
import './HistoryCard.css';

class HistoryCard extends Component {

  formatTime = time => {
    var minutes = "0" + Math.floor(time / 60);
    var seconds = "0" + (time - minutes * 60);
    return minutes.substr(-2) + ":" + seconds.substr(-2);
  }

  render() {
    const { historyEntry, index, onContinue } = this.props;
    return (
      historyEntry.completed === false ? (
        <Card className='HistoryCard'>
          <div className='HistoryCard__container'>
            <div className='HistoryCard__container__index oneLine'>{index}</div>
            <div className='HistoryCard__container__difficulty oneLine'>{historyEntry.difficulty}</div>
            <div className='HistoryCard__container__time oneLine'>{this.formatTime(historyEntry.time)}</div>
            <div className='HistoryCard__container__button'><Button outline className='button' onClick={() => onContinue(historyEntry.sudokuId)} size='sm'>Continue</Button></div>
          </div>
        </Card>
      ) : (
        <Card className='HistoryCard'>
          <div className='HistoryCard__container'>
            <div className='HistoryCard__container__index oneLine'>{index}</div>
            <div className='HistoryCard__container__difficulty oneLine'>{historyEntry.difficulty}</div>
            <div className='HistoryCard__container__time oneLine'>{this.formatTime(historyEntry.time)}</div>
            <div className='HistoryCard__container__usedSolve oneLine'>
              {
                historyEntry.usedSolve ? (
                  <span className='solve'>with solve</span>
                ) : (
                  <span className='notSolve'>without solve</span> 
                )
              }
            </div>
          </div>
        </Card>
      )

        /* 

        izlabot esosho sudoku paradishanu, lai var izmantot ari history apskatisanai. varetu padot kadu
        parametru, kurs ja ir true, tad visi lauki ir disabled un laiks neskaitas. ja padod nepabeigtu 
        sudoku, tad var pildit, bet initial state janomaina un janomaina ari initial time.
        
        */

    )
  }
}

export default HistoryCard;