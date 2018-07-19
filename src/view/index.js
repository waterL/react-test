import React, { Component } from 'react';
import logo from '../logo.svg';
import {Link }from 'react-router-dom'


class First extends Component {
  render() {
    return (
      <div className="App">
      
        {this.newMethod()}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React{new Date().toLocaleTimeString()}</h1>
        </header>
        <div><this.arr /></div>
        <div>{this.arr()}</div>
        {this.getGreeting(this.user())}
        <Link className="App-intro" to='list'>
          
          To get started, edit <code>src/App.js</code> and save to reload.
        </Link>
      </div>
    );
  }

  newMethod() {
    return <div className="aaa">aasdad</div>;
  }

  a(user){
    return user.firstName + ' ' + user.lastName;
  }
  getGreeting(user) {
      return <h1>Hello, {this.a(user)}!</h1>;
  }

  user(){
    return {
      firstName: 'Harper',
      lastName: 'Perezaaa'
    }
  }
  arr(){
    var array = [1,2,3,4];
    // for (let i = 0; i < array.length; i++) {
    //   console.log(<li>{array[i]}</li>)
    //   listItems += <li>{array[i]}</li>;
    // }
    const listItems = array.map((num) => 
      <li key={num.toString()}>{array[num-1]}</li>
    );

    
    return listItems
  }
}

export default First;
