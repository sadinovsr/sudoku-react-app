import React, { Component } from 'react';
import Header from './components/Header/Header';
import MainBody from './components/MainBody/MainBody';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Header/>
        </header>
        <div className="App__content">
          <MainBody />
        </div>
      </div>
    );
  }
}

export default App;
