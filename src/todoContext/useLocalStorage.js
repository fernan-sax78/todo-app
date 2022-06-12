import React from 'react';


function useLocalStorage(itemName, initialValue) {

    const [error, setError] = React.useState(false);
  
    const [loading, setLoading] = React.useState(true);
  
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(() => {
      setTimeout(() => {
  
        try{
  
          const localStorageItems = localStorage.getItem(itemName);
  
          let parsedItems;
          
          if (!localStorageItems) {
          
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItems = initialValue;
          
             }else{
                 parsedItems = JSON.parse(localStorageItems);
              };
        
        
              setItem(parsedItems);
              setLoading(false);
              
        }catch(error){
  
            setError(error);
  
        }
  
      },2500);
  
    });
  
  
  
  
    
  
  
  
  
    const saveItem = (newItem) => {
     try{
      const stringyfiedTodos = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringyfiedTodos);
      setItem(newItem);
     }catch(error){
  
      setError(error)
  
        }
      };
  
  
      return {
        item,
        saveItem,
        loading,
        error,
      };
  
  
  }
  
  
  //....................................



  export {useLocalStorage};