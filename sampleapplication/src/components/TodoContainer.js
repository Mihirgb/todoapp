import React from 'react';

const TodoContainer = ({ todo, onToggleComplete, onDelete }) => {
  const todoDate=new Date(todo.createdAt)
  const istDateString = todoDate.toLocaleString("en-US", { timeZone: "Asia/Kolkata" });

  const duedate=new Date(todo.dueDate)
  const dueDatestring = duedate.toLocaleString("en-US", { timeZone: "Asia/Kolkata" });



  return (
    <div className={`todo-container ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content" onClick={() => onToggleComplete(todo._id, todo.completed)}>
        <h4>{todo.title}</h4>
        <p className="todo-time">Created At: {istDateString}</p>
        <p className="todo-time">Due At: {dueDatestring}</p>
      </div>
      <div className="todo-actions">
        {todo.completed ? <span className="tick-mark">✔</span> : null}
        <button onClick={() => onDelete(todo._id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoContainer;
