import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import TodoContainer from "./components/TodoContainer";
import useTodos from "./hooks/useTodos";
import Taskform from './components/Taskform';
import "./styles/index.css";

const App = () => {
  const { todos, addTodo, toggleComplete, deleteTodo } = useTodos();
  const [title, setTitle] = useState('');
  const [showForm, setShowForm] = useState(false); // State to control Taskform visibility

  const handleAddTodo = () => {
    setShowForm((prevShowForm) => !prevShowForm); // Show Taskform when add button is clicked
    // if(title){
    //   addTodo(title);
    //   setTitle("")
    // }
  };

  return (
    <div>
      <Navbar />
      <div className="full-container">
<div className="todo-input-container">
  <div className="todo-input">
    <h2>Add new task</h2>
  </div>
  <button onClick={handleAddTodo} className="add-todo-button">
  +
  </button>
</div>
{showForm && <Taskform addTodo={addTodo} setShowForm={setShowForm} />}


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
