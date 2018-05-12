import React, { Component } from 'react';
import './App.css';
import {
  Link,
  Route
} from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const First = () => (
  <div>
    <h2>First</h2>
  </div>
)

const Second = () => (
  <div>
    <h2>Second</h2>
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <br/>
        <h3>React Examples</h3>
        <br/>
        <div>
        <nav className="navbar navbar-expand-sm bg-light">
          <ul className="nav navbar-nav">
            <li class="nav-item"><Link to="/" class="nav-link">Home</Link></li>
            <li class="nav-item"><Link to="/first" class="nav-link">First</Link></li>
            <li class="nav-item"><Link to="/second" class="nav-link">Second</Link></li>

          </ul>
         </nav>
           <Route path="/" component={Home}/>
           <Route path="/first" component={First}/>
           <Route path="/second" component={Second}/>

      </div>
  <br/>
        </div>
    );
  }
}

export default App;
