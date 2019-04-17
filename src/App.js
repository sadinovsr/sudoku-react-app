import React, { Component } from 'react';
// import Header from './components/Header/Header';
import HeaderContainer from './containers/HeaderContainer';
import MainBody from './components/MainBody/MainBody';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <HeaderContainer/>
        </header>
        <div className="App__content">
          <MainBody />
        </div>
      </div>
    );
  }
}

export default App;
