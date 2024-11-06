import React from 'react';

const TodoContainer = ({ todo, onToggleComplete, onDelete }) => {
  const formattedDate = new Date(todo.createdAt).toLocaleDateString();

  return (
    <div className={`todo-container ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content" onClick={() => onToggleComplete(todo._id, todo.completed)}>
        <h4>{todo.title}</h4>
        <p className="todo-date">{formattedDate}</p>
      </div>
      <div className="todo-actions">
        {todo.completed ? <span className="tick-mark">✔</span> : null}
        <button onClick={() => onDelete(todo._id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoContainer;
