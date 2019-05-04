import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserSelf } from '../redux/actions/userActions';
import { getAdminDashboardData } from '../redux/actions/adminActions';
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

  render() {
    const { adminDashboardData, user } = this.props;
    if ( user && user.level === 'admin' ) {
      return <AdminDashboard adminDashboardData={adminDashboardData} />
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
  }
};

const mapDispatchToProps = {
  getAdminDashboardData,
  getUserSelf
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminDashboardContainer);