import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import TodoContainer from "./components/TodoContainer";
import useTodos from "./hooks/useTodos";
import "./styles/index.css";

const App = () => {
  const { todos, addTodo, toggleComplete, deleteTodo } = useTodos();
  const [title, setTitle] = useState('');

  const handleAddTodo = () => {
    if (title) {
      addTodo(title);
      setTitle('');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="full-container">
<div className="todo-input-container">
  <input
    type="text"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    placeholder="Add a new task"
    className="todo-input"
  />
  <button onClick={handleAddTodo} className="add-todo-button">
    +
  </button>
</div>


      <div className="todo-list">
        {todos.map(todo => (
          <TodoContainer
            key={todo._id}
            todo={todo}
            onToggleComplete={toggleComplete}
            onDelete={deleteTodo}
          />
        ))}
      </div>

      </div>
      
    </div>
  );
};

export default App;
