import React, { Component} from 'react';

class List extends Component {
    constructor(props){
        super(props);

        const {dataToBind} = this.props;

        this.state = { dataToBind };
    }
    componentDidMount(){
        fetch('https://dog.ceo/api/breeds/list/all', {
            method: "GET",
            dataType:"JSON",
        })
        .then((resp=> {
            return resp.json()
        }))
        .then((data)=> {
            let dataToBind = JSON.stringify(data.message);
           this.setState({dataToBind:dataToBind});
        })
        .catch((error)=> {
            console.log(error,"Error occured");
        });
    }
    render() {
        let data = this.state.dataToBind;
        return (
            <div>
                Complete List 
                <div/>
                <div>{this.state.dataToBind}</div>
            </div>
        );
    }
}

export default List;