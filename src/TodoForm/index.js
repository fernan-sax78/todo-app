import React from 'react';
import { TodoContext } from '../todoContext';
import './TodoForm.css';


function TodoForm() {

    const [newTodoValue , setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
          setNewTodoValue(event.target.value);
    };

const onCancel = () => {
    setOpenModal(false);
};
//......................


const onSubmit = (event) => {

    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
};


//........................

    return (
        <form onSubmit={onSubmit}>
            <label>Add your TODO <i className ="fa-solid fa-arrow-down"></i></label>
           <textarea
           placeholder='write here...'
           value= {newTodoValue}
           onChange = {onChange}
           />
          <div className='TodoForm-buttonContainer'>

          <button
          type='button'
           onClick={onCancel}
           className = "TodoForm-button TodoForm-buttonContainer_btnCancel"
           >
               Cancel
           </button>
           
           <button
           type='submit'
           onClick={onSubmit}
           className = "TodoForm-button TodoForm-buttonContainer_btnAdd"
           >
               Add
           </button>

          </div>
        </form>
    )
}

export { TodoForm };