import React from 'react';
import {TodoContext} from '../todoContext';
import './TodoSearch.css';

function TodoSearch(props) {


    const {
        
           searchValue, 
           setSearchValue

    } = React.useContext(TodoContext);

    const onSearchValueChange = (event)=> {
        //console.log(event.type);

        setSearchValue(event.target.value);

    }


    return (
       
        <React.Fragment>
       
           <input className='TodoSearch'
           placeholder="search"
           value={searchValue}
           onChange = {onSearchValueChange}/>
       
       {/*     <TodoEmpty

           valor = {searchValue}
    
           
           /> */}
           
           
       
       
        </React.Fragment>
        
       );


   }


export {TodoSearch};