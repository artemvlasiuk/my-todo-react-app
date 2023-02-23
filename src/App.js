import { v4 as uuidv4 } from 'uuid';
import './App.css';
import { useState, useEffect } from 'react';
import StatusFilter from './components/StatusFilter';
import TodoList from './components/TodoList';
import Form from './components/Form';

function App() {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterTodosHandler();
  }, [todos, status]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    };
    if (!text) return;
    setTodos([...todos, newTodo]);
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      })
    );
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filterTodosHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(
          todos.filter((todo) => {
            return todo.isCompleted;
          })
        );
        break;
      case 'active':
        setFilteredTodos(
          todos.filter((todo) => {
            return !todo.isCompleted;
          })
        );
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const deleteCompletedTodos = () => {
    setFilteredTodos(
      filteredTodos.filter((todo) => {
        return !todo.isCompleted;
      })
    );
    setTodos(
      todos.filter((todo) => {
        return !todo.isCompleted;
      })
    );
  };

  const completedTodos = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className='wrapper'>
      <div className='header'>#todo</div>
      <StatusFilter setStatus={setStatus} />
      <Form addTodo={addTodoHandler} />
      <TodoList
        filteredTodos={filteredTodos}
        toggleTodo={toggleTodoHandler}
        deleteTodo={deleteTodoHandler}
        setFilteredTodos={setFilteredTodos}
      />
      {status === 'completed' && completedTodos ? (
        <button className='delete-btn' onClick={deleteCompletedTodos}>
          delete completed
        </button>
      ) : null}
    </div>
  );
}

export default App;
