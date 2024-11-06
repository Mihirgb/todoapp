// src/hooks/useTodos.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useTodos = () => {
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    const fetchTodos = async () => {
      const response = await axios.get('http://localhost:8080/api/todos');
      setTodos(response.data);
    };
    fetchTodos();
  }, []);

  const addTodo = async (title, dueDate) => {
  // Convert dueDate to ISO format if it's provided
  const dueDateToSend = dueDate ? new Date(dueDate).toISOString() : null;

  const response = await axios.post('http://localhost:8080/api/todos', { title, dueDate: dueDateToSend });
  setTodos([...todos, response.data]);
};


  const toggleComplete = async (id, completed) => {
    const response = await axios.put(`http://localhost:8080/api/todos/${id}`, { completed: !completed });
    setTodos(todos.map(todo => (todo._id === id ? response.data : todo)));
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:8080/api/todos/${id}`);
    setTodos(todos.filter(todo => todo._id !== id));
  };

  return { todos, addTodo, toggleComplete, deleteTodo };
};

export default useTodos;
