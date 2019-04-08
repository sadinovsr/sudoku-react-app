import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from 'reactstrap';
import './Header.css';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      doRedirect: false,
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

  setLoginRedirect = () => {
    this.setState({
      doRedirect: true
    })
  }

  render() {
    const { doRedirect } = this.state;

    return (
      <div className="Header">
        <div className="Header__main">
          <div className="Header__main__title">Sudoku App</div>
        </div>
        <div className="Header__button">
          { this.state.isLoggedIn ? (
            <Button className='disabled'>Log out</Button> //Later UserProfile component will be added here
          ) : (
            <Button onClick={this.setLoginRedirect}>Login</Button>
          )}
          {doRedirect && <Redirect to='/login' />}
        </div>
      </div>
    )
  }
}

export default Header;