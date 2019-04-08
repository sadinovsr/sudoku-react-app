import React, { Component } from 'react';
import { Button, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Login.css';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    }
  }

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { username, password } = this.state;
    const { onLogin, errorMessage } = this.props;

    return (
      <div className="Login">
        <div className="Login__content">
          <h2>Login</h2>
          {
            errorMessage ? (
              <Alert color='danger'>{errorMessage}</Alert>
            ) : (
              <div></div>
            )
          }
          <form>
            <div className="form-group">
              <label>username</label>
              <input
                onChange={this.onInputChange}
                className="form-control"
                type="text"
                name="username"
                value={username}
              />
            </div>
            <div className="form-group">
              <label>password</label>
              <input
                onChange={this.onInputChange}
                className="form-control"
                type="password"
                name="password"
                value={password}
              />
            </div>
            <Button
              className="Login__content__button"
              color="dark"
              onClick={() => onLogin(username, password)}
            >
              Login
            </Button>
          </form>
          <Link to="/register">Don't have an account?</Link>
        </div>
      </div>
    )
  }
}

export default Login;