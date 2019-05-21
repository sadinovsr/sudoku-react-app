import React, { Component } from 'react';
import { Button, Alert } from 'reactstrap';
import './Register.css';

class Register extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      username: "",
      password: ""
    }
  }

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { username, email, password } = this.state;
    const { onRegister, onRedirect, errorMessage } = this.props;

    return (
      <div className="Register">
        <div className="Register__content">
          {
            (errorMessage) ? (
              <Alert color='danger'>{errorMessage}</Alert>
            ) : (
              <React.Fragment />
            )
          }
          <h2>Register</h2>
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
              <label>email</label>
              <input
                onChange={this.onInputChange}
                className="form-control"
                type="email"
                name="email"
                value={email}
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
              className="Register__content__button"
              color="dark"
              onClick={() => onRegister(username, email, password)}
            >
              Register
            </Button>
          </form>
          <div className='div-link' onClick={() => onRedirect()}>Already have an account?</div>
        </div>
      </div>
    )
  }
}

export default Register;