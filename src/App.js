import React, { Component } from 'react';
import routes from './routes';
import './App.css';
import {
  Link,
  Route
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <br/>
        <h3>React Examples</h3>
        <br/>
        <nav className="navbar navbar-expand-sm bg-light">
          <ul className="nav navbar-nav">
          {routes.map(function({path,DisplayText}, index){
                    return <li key={ index }><Link to={path} class="nav-link">{DisplayText}</Link></li>;
                  })}
          </ul>
         </nav>
        <div>
        {routes.map(function({path,component}, index){
                    return <Route path={path} component={component}/>;
                  })}
      </div>
  <br/>
        </div>
    );
  }
}

export default App;
