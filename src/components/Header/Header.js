import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import './Header.css';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      doRedirectToLogin: false,
      isLoggedIn: false,
    }
  }

  componentDidMount() {
    if ( localStorage.getItem( 'token' ) !== null ) {
      this.setState({
        isLoggedIn: true
      });
    }
  }

  setRedirectToLogin = () => {
    this.setState({
      doRedirectToLogin: true
    })
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false
    })
    this.props.onLogout();
  }

  render() {
    const { doRedirectToLogin } = this.state;

    return (
      <div className="Header">
        <div className="Header__main">
          <Link to='/' className="Header__main__title">SUDOKU APP</Link>
        </div>
        <div className="Header__button">
          { this.state.isLoggedIn ? (
            <Button onClick={this.handleLogout}>Log out</Button>
          ) : (
            <Button onClick={this.setRedirectToLogin}>Login</Button>
          )}
          {doRedirectToLogin && <Redirect to='/login' />}
        </div>
      </div>
    )
  }
}

export default Header;