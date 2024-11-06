const express=require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const todoRoutes = require('./routes/todoroutes');
const app=express()

app.use(bodyParser.json());
app.use(cors());

app.use('/api/todos', todoRoutes);
mongoose.connect('mongodb+srv://mihirgajbhiye20:mihir123@todolistcluster.3rloh.mongodb.net/?retryWrites=true&w=majority&appName=todolistcluster', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

app.listen(8080,()=>{
    console.log('App started on port 8080')
})