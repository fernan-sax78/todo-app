import React from 'react';
import { TodoContext } from '../todoContext';
import './TodoCounter.css';


function TodoCounter() {

const {
    totalTodos,
    completedTodos
} = React.useContext(TodoContext);

    return (
        
        <header className='divContainer'>
            <h1 className='title'>Todo's List</h1>
                <hr></hr>
            <h2 className='h2Todo'>You Finish {completedTodos} of {totalTodos} TO-DOs</h2>
        </header>
       
    );
}

export {TodoCounter};