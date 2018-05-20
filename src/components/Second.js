import React, { Component} from 'react';
import List from './List';

class Second extends Component {
  state = {
    data:[]
  };

  clearData = () => {
    const newState = Object.assign({}, this.state, {
      data:[]
    });

    this.setState(newState);
  }
  fetchData = () => {
    fetch('https://dog.ceo/api/breeds/list/all', {
      
              method: "GET",
      
              dataType: "JSON",
      
            })
      
            .then((resp => {
      
              return resp.json()
      
            }))
      
            .then((data) => {
      
              let bindData = [];
      
              for (var k in data.message) {
      
                bindData.push(k);
      
              }
      
              const newState = Object.assign({}, this.state, {
                data: bindData
              });
      
              this.setState(newState);
      
            })
      
            .catch((error) => {
      
              console.log(error, "Error occured");
      
            });
  }
  render() {
    return (
      <div> 
        <div className="container center">
                <button onClick={this.fetchData}>Fetch Data</button>
                <br/>
                <button onClick={this.clearData}>Clear Data</button>
            </div>
        <List data = {this.state.data}></List>
        </div>
    );

  }
}



export default Second;