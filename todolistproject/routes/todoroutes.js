const express = require('express');
const router = express.Router();
const Todo = require('../models/mongodb');

// Get all todos
router.get('/', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// Create a new todo
router.post('/', async (req, res) => {
  const { title, dueDate } = req.body;

  // try {
    const validDueDate = dueDate && !isNaN(new Date(dueDate)) ? new Date(dueDate) : undefined;

    // if (!validDueDate) {
    //   return res.status(400).json({ error: "Invalid dueDate format" });
    // }

    const todo = new Todo({
      title,
      dueDate: validDueDate
    });
    await todo.save();
    res.json(todo);
  // } catch (error) {
  //   res.status(500).json({ error: 'Failed to create task' });
  // }
});
// Update a todo
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  const todo = await Todo.findByIdAndUpdate(id, { completed }, { new: true });
  res.json(todo);
});

// Delete a todo
router.delete('/:id', async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: 'Todo deleted' });
});

module.exports = router;
