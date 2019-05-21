import React, { Component } from 'react';
import { Button, Alert } from 'reactstrap';
import './Login.css';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    }
  }

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { username, password } = this.state;
    const { onLogin, errorMessage, onRedirect } = this.props;

    return (
      <div className='Login'>
        <div className='Login__content'>
          {
            (errorMessage) ? (
              <Alert color='danger'>{errorMessage}</Alert>
            ) : (
              <React.Fragment />
            )
          }
          <h2>Login</h2>
          <form>
            <div className='form-group'>
              <label>username</label>
              <input
                onChange={this.onInputChange}
                className='form-control'
                type='text'
                name='username'
                value={username}
              />
            </div>
            <div className='form-group'>
              <label>password</label>
              <input
                onChange={this.onInputChange}
                className='form-control'
                type='password'
                name='password'
                value={password}
              />
            </div>
            <Button
              className='Login__content__button'
              color='dark'
              onClick={() => onLogin(username, password)}
            >
              Login
            </Button>
          </form>
          <div className='div-link' onClick={() => onRedirect()}>Don't have an account?</div>
        </div>
      </div>
    )
  }
}

export default Login;