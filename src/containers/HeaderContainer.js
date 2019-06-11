import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout, getUserSelf } from '../redux/actions/userActions';
import Header from '../components/Header/Header';

export class HeaderContainer extends Component {
  async componentDidMount() {
    if ( localStorage.getItem('token') ) {
      await this.props.getUserSelf();
      if ( !this.props.isLoggedIn ) {
        this.props.logout();
      }
    }
  }

  onLogout = () => {
    this.props.logout();
  }

  render() {
    const { isLoggedIn, user } = this.props;
    return <Header isLoggedIn={isLoggedIn} user={user} onLogout={this.onLogout} />
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.loginReducer.isLoggedIn,
    user: state.getUserSelfReducer.user
  }
};

const mapDispatchToProps = {
  logout,
  getUserSelf
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);