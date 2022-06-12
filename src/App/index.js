//import logo from './logo.svg';
//import './App.css';

import React from 'react';
import { TodoProvider } from '../todoContext';
import { AppUI } from './AppUI';





function App() {

  return (
<TodoProvider>
  <AppUI />
</TodoProvider>
  );
}

export default App;
