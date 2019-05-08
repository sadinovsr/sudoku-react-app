import React, { Component } from 'react';
import { Progress, Button } from 'reactstrap';
import UserEdit from '../UserEdit/UserEdit';
import './ProfileCard.css';

class ProfileCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditOpen: false,
    };
  }

  convertDate = (date) => {
    const newDate = new Date(date);
    const stringDate = newDate.toString();
    return stringDate.slice(4, 16);
  }

  onEditOpen = () => {
    this.setState({
      isEditOpen: true,
    })
  }

  onEditClose = () => {
    this.setState({
      isEditOpen: false,
    })
  }

  onUserUpdate = (userId, newUserObject) => {
    this.setState({
      isEditOpen: false,
    });
    if ( this.props.user.username === newUserObject.username && newUserObject.password === '' ) {
      this.props.onUpdate(userId, newUserObject, false);
    } else {
      this.props.onUpdate(userId, newUserObject, true);
    }
  }

  render() {
    const { isEditOpen } = this.state;
    const { user, statistics } = this.props;
    return (
      user && statistics ? (
        <div className='ProfileCard'>
          <div className='ProfileCard__username'>
            {user.username} 
          </div>
          <div className='ProfileCard__edit'>
            <Button onClick={() => this.onEditOpen()} outline color='primary'>Edit Profile</Button>
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
            {isEditOpen && <UserEdit user={user} onClose={this.onEditClose} onUserUpdate={this.onUserUpdate} />}
          </div>
        </div>
      ) : ( 
        <span></span> 
      )
    )
  }
}

export default ProfileCard;