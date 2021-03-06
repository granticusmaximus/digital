import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import NaviRoute from './components/navMenu';
import { SideNav } from 'react-sidenav/SideNav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <NaviRoute />
        <SideNav />
        <div className="footer">
          <p>Footer</p>
        </div>
      </div>
    );
  }
}

export default App;
