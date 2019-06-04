import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { register } from '../redux/actions/userActions';
import Register from '../components/Register/Register';

class RegisterContainer extends Component {
  constructor() {
    super();

    this.state = {
      errorMessage: null
    }
  }

  setErrorMessage = ( message ) => {
    this.setState({
      errorMessage: message,
    });
  }

  onRegister = async (username, email, password) => {
    if (!username) {
      this.setErrorMessage('Username field is required!');
      return;
    }
    if (!email) {
      this.setErrorMessage('Email field is required!');
      return;
    }
    if (!password) {
      this.setErrorMessage('Password field is required!');
      return;
    }
    if ( /^[A-Za-z0-9_]+$/.test(username) === false ) {
      this.setErrorMessage('Username must consist only of english letters, numbers, underscores');
      return;
    }
    await this.props.register(username, email, password);
      this.setErrorMessage(this.props.errorMessage);
    }

  onRedirect = () => {
    this.setErrorMessage(null);
    this.props.history.push('/login');
  }

  render() {
    const { isRegistered } = this.props;
    const { errorMessage } = this.state;

    return isRegistered ? <Redirect to="/login" /> : <Register onRegister={this.onRegister} errorMessage={errorMessage} onRedirect={this.onRedirect} />
  }
}

const mapStateToProps = state => {
  return {
    isRegistered: state.registerReducer.isRegistered,
    errorMessage: state.registerReducer.errorMessage
  }
};

const mapDispatchToProps = {
  register
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterContainer);