import React, { Component } from 'react';
// import {BrowserRouter } from 'react-router-dom'
// import { Link }from 'react-router-dom'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    // this.timerID = setInterval(
    //   () => this.tick(),
    //   1000
    // );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
 
  render() {
    console.log(this.props,this.state)
    return (
      <div>
        <a href='https://www.baidu.com/' onClick={this.tap.bind(this,300)}>App{this.state.date.toLocaleTimeString()}</a>
        {this.props.children}
        <this.Active date={this.state.date} />
      </div>
    );
  }

  Active(props){
    console.log('Active',props)
    
    return <h1>{props.date.toLocaleTimeString()}</h1>
  }
  tap (id,e){
    e.preventDefault()
    alert(111)
    console.log(e,id, 'tap',this)
    e.stopPropagation()
    alert(1122222)
  }
}

export default App;
