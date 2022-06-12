import React from 'react';
import './TodoLoading.css';

function TodoLoading(){
    return (
        <div className="loading-container">
        <div className="loading"></div>
        <div id="loading-text"><span>LOADING</span></div>
        </div>
  )
}

export {TodoLoading}