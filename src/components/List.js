import React from 'react';

function List(props){
    return (
        <ul>{props.data.map(c => <li key={c} className='col-md-4'>{c}</li>)}</ul>
    );
}

export default List;