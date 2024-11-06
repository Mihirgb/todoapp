import React, { useState } from 'react';

const Taskform = ({ addTodo, setShowForm }) => {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate dueDate
    const dueDateObj = new Date(dueDate);
    if (isNaN(dueDateObj.getTime())) {
        console.error("Invalid dueDate format");
        return; // Exit if the date is invalid
    }

    try {
        const dueDateToSend = dueDateObj.toISOString();

        console.log("Payload being sent:", { title, dueDate: dueDateToSend });

        const response = await fetch('http://localhost:8080/api/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, dueDate: dueDateToSend })
        });

        if (response.ok) {
            const newTodo = await response.json();
            // addTodo(newTodo.title,newTodo.dueDate);
            setShowForm(false);
            setTitle('');  // Clear the input field
        setDueDate('');  // Clear the due date
        window.location.reload();
        } else {
            console.error("Failed to add task", response.status, await response.text());
        }
    } catch (error) {
        console.error("Error:", error);
    }
};

  return (
    <div className="task-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Task Name:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br /><br />

        <label htmlFor="dueDate">Due Date:</label>
        <input
          type="date"
          id="dueDate"
          name="dueDate"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
        <br /><br />

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default Taskform;
