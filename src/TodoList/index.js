import React from 'react';
import './TodoList.css';

function TodoList(params) {
    return (
        <section>
            <ul>
            {params.children}
            </ul>
        </section>
    );
}

export {TodoList};