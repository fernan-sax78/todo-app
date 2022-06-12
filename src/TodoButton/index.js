import React from 'react';
import './CreateTodoButton.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlus} from "@fortawesome/free-solid-svg-icons"

library.add(faPlus);
function CreateTodoButton(props){
  
   const onClickButton = () => {
       props.setOpenModal(prevState => !prevState);
   }

    return (
      
        <button className='CreateTodoButton' onClick={onClickButton}><FontAwesomeIcon icon="plus"/></button>
         
       
    );
}

export {CreateTodoButton};