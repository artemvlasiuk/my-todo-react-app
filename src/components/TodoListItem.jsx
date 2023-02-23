import React from 'react';
import { Reorder } from 'framer-motion';
import { FaTrash } from 'react-icons/fa';

export default function TodoListItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <Reorder.Item value={todo} whileDrag={{ scale: 1.1 }} className='list-item'>
      <li
        className={todo.isCompleted ? 'completed' : ''}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </li>
      <FaTrash onClick={() => deleteTodo(todo.id)} />
    </Reorder.Item>
  );
}
