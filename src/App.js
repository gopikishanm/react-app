import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './AnimalInfo/List'

class App extends Component {

  state = {
    animalList: []
};

   componentDidMount(){
    fetch('https://dog.ceo/api/breeds/list/all', {
      method: "GET",
      dataType:"JSON",
  })
  .then((resp=> {
      return resp.json()
  }))
  .then((data)=> {
      let bindData = [];
     for(var k in data.message) {
          bindData.push(k);
     }
     const newState = Object.assign({},this.state, {animalList:bindData});
     this.setState(newState);
  })
  .catch((error)=> {
      console.log(error,"Error occured");
  });
   }

  render() {
    return (
      <div className="App">
        <br/>
        <h3>React Examples</h3>
        <div>To demonstrate react components using DogApi.</div>
        <br/>
        <div>The first component is list component which I used to display all breeds</div>
        <br/>
        <div><List animalData={this.state.animalList}></List></div>
        </div>
    );
  }
}

export default App;
