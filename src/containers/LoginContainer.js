import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../redux/actions/userActions';
import Login from '../components/Login/Login';

class LoginContainer extends Component {
  constructor() {
    super();

    this.state = {
      errorMessage: null
    }
  }

  onLogin = async (username, password) => {
    if (!username || !password) {
      return;
    }
    await this.props.login(username, password);
    this.setState({
      errorMessage: this.props.errorMessage,
    });
  }

  onRedirect = () => {
    this.setState({
      errorMessage: null,
    });
    this.props.history.push('/register');
  }

  render() {
    const { isLoggedIn } = this.props;
    const { errorMessage } = this.state
    if ( localStorage.getItem('token') && isLoggedIn ) {
      return <Redirect to='/' />
    } else {
      return <Login onLogin={this.onLogin} errorMessage={errorMessage} isLoggedIn={isLoggedIn} onRedirect={this.onRedirect}/>
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