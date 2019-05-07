import React, { Component } from 'react';
import { Progress } from 'reactstrap';
import './ProfileCard.css';

class ProfileCard extends Component {

  convertDate = (date) => {
    const newDate = new Date(date);
    const stringDate = newDate.toString();
    return stringDate.slice(4, 16);
  }

  render() {
    const { user, statistics } = this.props;
    return (
      user && statistics ? (
        <div className='ProfileCard'>
          <div className='ProfileCard__username'>
            {user.username} 
          </div>
          <hr></hr>
          <div className='ProfileCard__information'>
            <div className='ProfileCard__information__content'>
              <div className='ProfileCard__information__label'>
                e-mail:
              </div>
              <div className='ProfileCard__information__text'>
                {user.email}
              </div>
            </div>
            <div className='ProfileCard__information__content'>
              <div className='ProfileCard__information__label'>
                Joined:
              </div>
              <div className='ProfileCard__information__text'>
                {this.convertDate(user.createdAt)}
              </div>
            </div>
          </div>
          <hr></hr>
          <div className='ProfileCard__statistics'>
            <div className='ProfileCard__statistics__container'>
              Solved sudokus
              <div  title='Solved / All' className='ProfileCard__statistics__label'>
                {`${statistics.doneCount} / ${statistics.allSudokuCount}`}
              </div>
              <div className='ProfileCard__statistics__progress'>
                <Progress value={statistics.doneCount} max={statistics.allSudokuCount} />
              </div>
            </div>
            <div className='ProfileCard__statistics__divider'></div>
            <div className='ProfileCard__statistics__container'>
              Started sudokus
              <div title='Started / All' className='ProfileCard__statistics__label'>
                {`${statistics.startedCount} / ${statistics.allSudokuCount}`}
              </div>
              <div className='ProfileCard__statistics__progress'>
                <Progress value={statistics.startedCount} max={statistics.allSudokuCount} />
              </div>
            </div>
            <div className='ProfileCard__statistics__divider'></div>
            <div className='ProfileCard__statistics__container'>
              Used solve
              <div title='Used Solve / Solved' className='ProfileCard__statistics__label'>
              {`${statistics.usedSolveCount} / ${statistics.doneCount}`}
              </div>
              <div className='ProfileCard__statistics__progress'>
                <Progress value={statistics.usedSolveCount} max={statistics.doneCount} />
              </div>
            </div>
          </div>
        </div>
      ) : ( 
        <span></span> 
      )
    )
  }
}

export default ProfileCard;