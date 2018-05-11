import React from 'react';

function List(props){
    return (
        <div>
           <ul>{props.animalData.map(c => <li>{c}</li>)}</ul>
        </div>
    );
}

export default List;