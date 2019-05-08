import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserSelf } from '../redux/actions/userActions';
import { getAdminDashboardData, deleteUser } from '../redux/actions/adminActions';
import AdminDashboard from '../components/AdminDashboard/AdminDashboard';
import { Spinner } from 'reactstrap';

class AdminDashboardContainer extends Component {
  async componentDidMount() {
    if ( localStorage.getItem('token') ) {
      await this.props.getUserSelf();
      if ( this.props.user.level === 'admin' ) {
        this.props.getAdminDashboardData();
      }
    }
  }

  redirectToHome = () => {
    this.props.history.push('/');
  }

  onDeleteUser = async userId => {
    await this.props.deleteUser(userId);
    await this.props.getAdminDashboardData();
  }

  render() {
    const { adminDashboardData, user } = this.props;
    if ( user && user.level === 'admin' ) {
      return <AdminDashboard adminDashboardData={adminDashboardData} onDeleteUser={this.onDeleteUser} />
    } else if ( user && ( user.level === 'user' || user.level === 'moderator' ) ) {
      return <div>{this.redirectToHome()}</div>
    } else {
      return <Spinner size='lg' />
    }
  }
}

const mapStateToProps = state => {
  return {
    adminDashboardData: state.getAdminDashboardDataReducer.adminDashboardData,
    user: state.getUserSelfReducer.user,
    isDeleted: state.deleteUserReducer.isDeleted,
  }
};

const mapDispatchToProps = {
  getAdminDashboardData,
  getUserSelf,
  deleteUser
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminDashboardContainer);