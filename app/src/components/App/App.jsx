import React, { Component } from 'react';
import './App.css';
import Navbar from '../Navbar';
import Main from '../Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Main />
      </div>
    );
  }
}

export default App;
