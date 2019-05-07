import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import UserCard from '../UserCard/UserCard';
import './AdminDashboard.css';

class AdminDashboard extends Component {
  constructor() {
    super();

    this.state = {
      userCard: {
        isOpen: false,
        user: {}
      }
    }
  }

  sortUsersByRecentDate = array => {
    array.sort(function(a, b) {
      a = new Date(a.createdAt);
      b = new Date(b.createdAt);
      return a>b ? -1 : a<b ? 1 : 0;
    });
    return array;
  }

  onOpenUserCard = user => {
    this.setState({
      userCard: {
        isOpen: true,
        user,
      }
    })
  }

  onCloseUserCard = () => {
    this.setState({
      userCard: {
        isOpen: false,
        user: {},
      }
    })
  }

  handleDelete = userId => {
    this.props.onDeleteUser(userId);
    this.setState({
      userCard: {
        isOpen: false,
        user: {},
      }
    })
  }

  render() {
    const { adminDashboardData } = this.props;
    const { userCard } = this.state;
    let sortedUsers = [];
    if ( adminDashboardData ) {
      sortedUsers = this.sortUsersByRecentDate( adminDashboardData.users );
    }
    return (
      adminDashboardData && adminDashboardData.users ? (
      <div className='AdminDashboard'>
        <div className='AdminDashboard__information'>
          <div className='AdminDashboard__information__container'>
            <div className='AdminDashboard__information__value'>
              {adminDashboardData.lastWeekNewUserCount}
            </div>
            <div className='AdminDashboard__information__label'>
              <div className='AdminDashboard__information__label__title'>
                Users Joined
              </div>
              <div className='AdminDashboard__information__label__description'>
                Count of new users who joined in last 7 days.
              </div>
            </div>
          </div>
          <div className='AdminDashboard__information__container'>
            <div className='AdminDashboard__information__value'>
              {adminDashboardData.sudokuCount}
            </div>
            <div className='AdminDashboard__information__label'>
              <div className='AdminDashboard__information__label__title'>
                Available sudokus
              </div>
              <div className='AdminDashboard__information__label__description'>
                Count of all available sudokus in sudoku app.
              </div>
            </div>
          </div>
        <div className='AdminDashboard__information__container'>
            <div className='AdminDashboard__information__value'>
              {adminDashboardData.completedSudokuCount}
            </div>
            <div className='AdminDashboard__information__label'>
              <div className='AdminDashboard__information__label__title'>
                Completed Sudokus
              </div>
              <div className='AdminDashboard__information__label__description'>
                Count of all completed sudokus between all users.
              </div>
            </div>
          </div>
        <div className='AdminDashboard__information__container'>
            <div title={`${adminDashboardData.usedSolveSudokuCount}/${adminDashboardData.completedSudokuCount}`} className='AdminDashboard__information__value'>
              {`${Math.round((adminDashboardData.usedSolveSudokuCount / adminDashboardData.completedSudokuCount)*100)}%`}
            </div>
            <div className='AdminDashboard__information__label'>
              <div className='AdminDashboard__information__label__title'>
                Used solve
              </div>
              <div className='AdminDashboard__information__label__description'>
                Percentage of users using 'solve' to complete sudoku.
              </div>
            </div>
          </div>
        </div>
        <div className='AdminDashboard__userList'>
          <div title='Newest users on top' className='AdminDashboard__userList__title'>Users</div>
          {
            sortedUsers.map((user, index) => {
              return (
              <div key={index} className='AdminDashboard__userList__user'>
                <Link to='/admin' onClick={() => this.onOpenUserCard(user)} className='AdminDashboard__userList__user__text'>{user.username}</Link>
              </div>
              )
            })
          }
        </div>
        {userCard.isOpen && <UserCard user={userCard.user} onClose={this.onCloseUserCard} handleDelete={this.handleDelete} />}
      </div>
      ) : (
        <Spinner size='lg' />
      )
    )
  }
}

export default AdminDashboard;