import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import MainContent from './MainContent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        <MainContent />
      </div>
    );
  }
}

export default App;
