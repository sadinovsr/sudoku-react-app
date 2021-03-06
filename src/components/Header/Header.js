import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, Spinner } from 'reactstrap';
import './Header.css';

class Header extends Component {
  constructor() {
    super();

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.state = {
      doRedirectToLogin: false,
      isDropdownOpen: false,
    }
  }

  setRedirectToLogin = () => {
    this.setState({
      doRedirectToLogin: true
    })
  }

  handleLogout = () => {
    this.setState({
      doRedirectToLogin: false,
    })
    this.props.onLogout();
  }

  toggleDropdown() {
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen
    });
  }

  render() {
    const { doRedirectToLogin } = this.state;
    const { isLoggedIn } = this.props

    return (
      <div className="Header">
        <div className="Header__main">
          <Link to='/' className="Header__main__title">SUDOKU APP</Link>
        </div>
        <div className="Header__button">
          {
            isLoggedIn ? (
              <ButtonDropdown className='Header__button__dropdown' isOpen={this.state.isDropdownOpen} toggle={this.toggleDropdown}>
                <DropdownToggle className='Header__button__dropdown__toggle' caret>
                  <span className='Header__button__dropdown__toggle__text'>
                    {
                      this.props.user ? (
                        this.props.user.username
                      ) : (
                        <Spinner size='sm'/>
                      )
                    }
                  </span>
                </DropdownToggle>
                <DropdownMenu right className='Header__button__dropdown__menu'>
                  <DropdownItem tag={Link} to='/'>Home</DropdownItem>
                  <DropdownItem tag={Link} to='/profile'>Profile</DropdownItem>
                  <DropdownItem tag={Link} to='/history'>History</DropdownItem>
                  <DropdownItem divider />
                  {
                    this.props.user && this.props.user.level === 'admin' ? (
                      <React.Fragment>
                        <DropdownItem tag={Link} to='/admin'>Dashboard</DropdownItem>
                        <DropdownItem tag={Link} to='/add'>Add Sudoku</DropdownItem>
                        <DropdownItem divider />
                      </React.Fragment>
                    ) : (
                      <React.Fragment/>
                    )
                  }
                  <DropdownItem tag={Link} to='/' onClick={this.handleLogout}>Logout</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            ) : (
              <Button onClick={this.setRedirectToLogin}>Login</Button>
            )
          }
          {doRedirectToLogin && <Redirect to='/login' />}
        </div>
      </div>
    )
  }
}

export default Header;