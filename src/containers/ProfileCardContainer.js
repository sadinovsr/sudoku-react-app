import React, { Component } from "react";
import { connect } from "react-redux";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import { getUserSelf, updateUser } from "../redux/actions/userActions";
import { getHistoryStatistics } from '../redux/actions/historyActions'
import { logout } from '../redux/actions/userActions';
import { Spinner } from 'reactstrap';

export class ProfileCardContainer extends Component {
  constructor() {
    super();

    this.state = {
      errorMessage: null
    }
  }

  componentDidMount() {
    if ( localStorage.getItem('token') ) {
      this.props.getUserSelf();
      this.props.getHistoryStatistics();
    }
  }

  setErrorMessage = message => {
    this.setState({
      errorMessage: message,
    })
  }

  clearErrorMessage = () => {
    this.setState({
      errorMessage: null,
    })
  }

  onUpdate = async ( userId, newUserObject, shouldLogin ) => {
    if (!newUserObject) {
      return;
    }
    if ( !newUserObject.username ) {
      this.setErrorMessage('Username cannot be empty!');
      return;
    }
    if ( !newUserObject.email ) {
      this.setErrorMessage('Email cannot be empty!');
      return;
    }
    if ( /^[A-Za-z0-9_]+$/.test(newUserObject.username) === false ) {
      this.setErrorMessage('Username must consist only of english letters, numbers, underscores')
      return;
    }
    await this.props.updateUser(userId, newUserObject);
    this.setErrorMessage(this.props.errorMessage);
    if ( this.props.isUpdated && shouldLogin ) {
      this.props.logout();
      this.props.history.push('/login');
    } else {
      this.props.getUserSelf();
    }
  }


  render() {
    const { user, statistics } = this.props;
    const { errorMessage } = this.state;
    
    return (
      (user) ? (
        <ProfileCard user={user} statistics={statistics} onUpdate={this.onUpdate} errorMessage={errorMessage} clearErrorMessage={this.clearErrorMessage} />
      ) : (
        <Spinner size='lg' />
      )
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.getUserSelfReducer.user,
    statistics: state.getHistoryStatisticsReducer.statistics,
    isUpdated: state.updateUserReducer.isUpdated,
    errorMessage: state.updateUserReducer.errorMessage,
  };
};

const mapDispatchToProps = {
  getUserSelf,
  getHistoryStatistics,
  updateUser,
  logout,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileCardContainer);