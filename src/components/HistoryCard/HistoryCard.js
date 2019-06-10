import React, { Component } from 'react';
import { Card } from 'reactstrap';
import './HistoryCard.css';
import HistoryPreviewContainer from '../../containers/HistoryPreviewContainer';

class HistoryCard extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
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

  togglePreview = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    const { historyEntry, index, onContinue } = this.props;
    const { isOpen } = this.state;
    return (
      <React.Fragment>
        {
        historyEntry.completed === false ? (
          <Card className='HistoryCard' onClick={ () => this.togglePreview()}>
            <div className='HistoryCard__container'>
              <div className='HistoryCard__container__index'>{index}</div>
              <div className='HistoryCard__container__difficulty'>{historyEntry.difficulty}</div>
              <div className='HistoryCard__container__time'>{this.formatTime(historyEntry.time)}</div>
              <div className='HistoryCard__container__updated'>{this.convertDate(historyEntry.updatedAt)}</div>
            </div> 
          </Card>
        ) : (
          <Card className='HistoryCard' onClick={ () => this.togglePreview()}>
            <div className='HistoryCard__container'>
              <div className='HistoryCard__container__index'>{index}</div>
              <div className='HistoryCard__container__difficulty'>{historyEntry.difficulty}</div>
              <div className='HistoryCard__container__time'>{this.formatTime(historyEntry.time)}</div>
              <div className='HistoryCard__container__updated'>{this.convertDate(historyEntry.updatedAt)}</div>
            </div>
          </Card>
        )
        }
        {isOpen && <HistoryPreviewContainer historyEntry={historyEntry} togglePreview={this.togglePreview} onContinue={onContinue} />}
      </React.Fragment>
    )
  }
}

export default HistoryCard;