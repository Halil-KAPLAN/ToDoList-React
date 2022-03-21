import React from "react";
import './styles/css/app.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <div className="todo-container">
      <h2>ToDo List</h2>
      <TodoForm></TodoForm>
      <TodoList></TodoList>
    </div>
  );
}

export default App;