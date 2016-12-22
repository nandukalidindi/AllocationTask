import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <Clock date={new Date()} />
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
