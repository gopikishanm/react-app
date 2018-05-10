import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './AnimalInfo/List'

class App extends Component {
  render() {
    return (
      <div className="App">
        <br/>
        <h3>React Examples</h3>
        <div>To demonstrate react components using DogApi.</div>
        <br/>
        <div>The first component is list component which I used to display all breeds</div>
        <br/>
        <div><List></List></div>
        </div>
    );
  }
}

export default App;
