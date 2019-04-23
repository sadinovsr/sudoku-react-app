import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../redux/actions/userActions';
import Login from '../components/Login/Login';

class LoginContainer extends Component {
  componentDidMount() {

  }

  onLogin = (username, password) => {
    if (!username || !password) {
      return;
    }
    this.props.login(username, password);
  }

  render() {
    let { isLoggedIn, errorMessage } = this.props;
    
    if ( !localStorage.getItem('token') ) {
      return <Login onLogin={this.onLogin} errorMessage={errorMessage} isLoggedIn={isLoggedIn}/>
    } else {
      return <Redirect to='/' />
    }
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.loginReducer.isLoggedIn,
    errorMessage: state.loginReducer.errorMessage
  }
};

const mapDispatchToProps = {
  login
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);