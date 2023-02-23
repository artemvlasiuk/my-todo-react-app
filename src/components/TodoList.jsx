import React from 'react';
import { Reorder } from 'framer-motion';
import TodoListItem from './TodoListItem';

export default function TodoList({
  toggleTodo,
  deleteTodo,
  filteredTodos,
  setFilteredTodos,
}) {
  return (
    <div className='todo-list'>
      <Reorder.Group
        axis='y'
        values={filteredTodos}
        onReorder={setFilteredTodos}
      >
        {filteredTodos.map((todo) => {
          return (
            <TodoListItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </Reorder.Group>
    </div>
  );
}
