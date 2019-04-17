import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import './Header.css';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      doRedirectToLogin: false,
    }
  }

  setRedirectToLogin = () => {
    this.setState({
      doRedirectToLogin: true
    })
  }

  render() {
    const { doRedirectToLogin } = this.state;

    return (
      <div className="Header">
        <div className="Header__main">
          <Link to='/' className="Header__main__title">SUDOKU APP</Link>
        </div>
        <div className="Header__button">
          {(localStorage.getItem('token') === null) ? (
            <Button onClick={this.setRedirectToLogin}>Login</Button>
          ) : (
            <Button>Profile</Button> //Later UserProfile component will be added here
          )}
          {doRedirectToLogin && <Redirect to='/login' />}
        </div>
      </div>
    )
  }
}

export default Header;