import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../redux/actions/userActions';
import Header from '../components/Header/Header';

class HeaderContainer extends Component {
  onLogout = () => {
    this.props.logout();
  }

  render() {
    const { isLoggedIn } = this.props;
    return <Header isLoggedIn={isLoggedIn} onLogout={this.onLogout} />
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.logoutReducer.isLoggedIn,
  }
};

const mapDispatchToProps = {
  logout
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);