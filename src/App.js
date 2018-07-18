import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function a(user){
  return user.firstName + ' ' + user.lastName;
}
const user = {
  firstName: 'Harper',
  lastName: 'Perezaa'
};
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {a(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
};
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {getGreeting(user)}
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
