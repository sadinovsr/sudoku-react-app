import React, { Component } from 'react';
import { Button, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';
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
    const { onRegister, errorMessage } = this.props;

    return (
      <div className="Register">
        <div className="Register__content">
          <h2>Register</h2>
          {
            errorMessage ? (
              <Alert color='danger'>
              {errorMessage.map((value) => {
                return <div>{value}</div>
              })}
              </Alert>
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
          <Link to="/login">Already have an account?</Link>
        </div>
      </div>
    )
  }
}

export default Register;