import React from 'react';

import {TodoContext} from '../todoContext';
import {TodoCounter} from '../TodoCounter';
import {TodoList} from '../TodoList';
import {TodoSearch} from '../TodoSearch';
import {TodoItem} from '../Todo_Item';
import {CreateTodoButton} from '../TodoButton';
import { Modal } from "../Modal";
import './App.css';
import { TodoForm } from '../TodoForm';
import {TodoError} from '../TodoError';
import { TodoLoading } from '../TodoLoading/TodoLoading';
import {TodoEmpty} from '../TodoEmpty/TodoEmpty';


function AppUI(){

const {
    error,
    loading,
    searchedTodos,
    completeTodos,
    deleteTodos,
    openModal,
    setOpenModal,
    searchValue,

} = React.useContext(TodoContext);



    return (
        <React.Fragment>
 
<TodoCounter/>
   <TodoSearch/>
   
    <TodoList>

           {error && <TodoError error = {error}/>}
           {loading && <TodoLoading/> }
           {(!loading && !searchedTodos.length) && <TodoEmpty valor = {searchValue}/>}
           
        {searchedTodos.map(todo => (
          <TodoItem key = {todo.text} 
          text ={todo.text}
          completed = {todo.completed}
          onComplete = {() => completeTodos(todo.text)}
          onDelete = {() => deleteTodos(todo.text)}
          />
          
        ))}
      </TodoList>

      
       {!!openModal && (
          <Modal>
         <TodoForm />
          </Modal>
       )}
      



   <CreateTodoButton

   setOpenModal = {setOpenModal}
   
   />
   {/* <FontawsomeIcons/> */}
</React.Fragment>
    )
}


export {AppUI};