import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from 'reactstrap';
import './Header.css';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      doRedirect: false,
    }
  }

  setRedirect = () => {
    this.setState({
      doRedirect: true
    })
  }

  render() {
    const { doRedirect } = this.state;

    return (
      <div className="Header">
        <div className="Header__main">
          <div className="Header__main__title">SUDOKU APP</div>
        </div>
        <div className="Header__button">
          {(localStorage.getItem('token') === null) ? (
            <Button onClick={this.setRedirect}>Login</Button>
          ) : (
            <Button>Profile</Button> //Later UserProfile component will be added here
          )}
          {doRedirect && <Redirect to='/login' />}
        </div>
      </div>
    )
  }
}

export default Header;