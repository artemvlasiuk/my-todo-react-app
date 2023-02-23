import React from 'react';
import { useState } from 'react';

export default function Form({ addTodo }) {
  const [todoText, setTodoText] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(todoText);
    setTodoText('');
  };

  return (
    <div className='add-item'>
      <form onSubmit={onSubmitHandler}>
        <input
          value={todoText}
          type='text'
          placeholder='add details'
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}
