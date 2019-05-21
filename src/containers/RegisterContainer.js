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

  onRegister = async (username, email, password) => {
    if (!username || !email || !password) {
      return;
    }
    await this.props.register(username, email, password);
    this.setState({
      errorMessage: this.props.errorMessage,
    })
  }

  onRedirect = () => {
    this.setState({
      errorMessage: null,
    });
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