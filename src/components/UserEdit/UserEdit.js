import React, { Component } from "react";
import { Button, Alert } from 'reactstrap';
import "./UserEdit.css";

class UserEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.user.username,
      email: this.props.user.email,
      password: '',

    };
  }

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { username, email, password } = this.state;
    const { onClose, onUserUpdate, user } = this.props;

    return (
      <div className="UserEdit">
        <div className="UserEdit__content">
          <form>
            <div className="form-group">
              <label>Change username</label>
              <input
                onChange={this.onInputChange}
                className="form-control"
                type="text"
                name="username"
                value={username}
              />
            </div>
            <div className="form-group">
              <label>Change e-mail</label>
              <input
                onChange={this.onInputChange}
                className="form-control"
                type="email"
                name="email"
                value={email}
              />
            </div>
            <div className="form-group">
              <label>Change password</label>
              <input
                onChange={this.onInputChange}
                className="form-control"
                type="password"
                name="password"
                value={password}
              />
            </div>
            <Alert color='secondary'>If username and/or password is changed, You will need to log in again!</Alert>
            <div className='UserEdit__buttons'>
              <Button color='danger' onClick={() => onClose()}>Cancel</Button>
              <Button onClick={() => onUserUpdate(user._id ,{username, email, password})}>Save</Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default UserEdit;