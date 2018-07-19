import React, { Component } from 'react';


class List extends Component {
  render(props) {
    return (
      <div className="list">
            list      listlist
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
export default List;
