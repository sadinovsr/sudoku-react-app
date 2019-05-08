import React, { Component } from "react";
import { connect } from "react-redux";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import { getUserSelf, updateUser } from "../redux/actions/userActions";
import { getHistoryStatistics } from '../redux/actions/historyActions'
import { logout } from '../redux/actions/userActions';
import { Spinner } from 'reactstrap';

class ProfileCardContainer extends Component {

  componentDidMount() {
    if ( localStorage.getItem('token') ) {
      this.props.getUserSelf();
      this.props.getHistoryStatistics();
    }
  }

  onUpdate = async ( userId, newUserObject, shouldLogin ) => {
    if (!newUserObject) {
      return;
    }
    await this.props.updateUser(userId, newUserObject);
    if ( this.props.isUpdated && shouldLogin ) {
      this.props.logout();
      this.props.history.push('/login');
    } else {
      this.props.getUserSelf();
    }
  }


  render() {
    const { user, statistics } = this.props;
    
    return (
      (user) ? (
        <ProfileCard user={user} statistics={statistics} onUpdate={this.onUpdate} />
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