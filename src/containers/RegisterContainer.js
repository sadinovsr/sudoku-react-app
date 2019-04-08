import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { register } from '../redux/actions/userActions';
import Register from '../components/Register/Register';

class RegisterContainer extends Component {
  onRegister = (username, email, password) => {
    if (!username || !email || !password) {
      return;
    }
    this.props.register(username, email, password);
  }

  render() {
    const { isRegistered, errorMessage } = this.props;

    return isRegistered ? <Redirect to="/login" /> : <Register onRegister={this.onRegister} errorMessage={errorMessage} />
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