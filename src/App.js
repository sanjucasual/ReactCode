import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  render() {
    return (
    <div className="App">
      <h1>
        Hello world my first component
      </h1>
<Person name='Sanjeev' age="30"></Person>
<Person name='Aarthi' age="25">My hobbies are games</Person>
<Person name='Rajeev' age="29"></Person>
    </div>
    );
  }
}

export default App;
