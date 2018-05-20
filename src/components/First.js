import React, {
  Component
} from 'react';
import List from './List'

class First extends Component {
  state = {
    data: []
  };

  componentDidMount() {
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
      <div> <List data = {this.state.data}></List></div>
    );

  }
}

export default First;