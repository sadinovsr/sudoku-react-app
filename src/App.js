import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Header from './components/Header/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Header/>
        </header>
        <Container>
          {/* Next components */}
        </Container>
      </div>
    );
  }
}

export default App;
