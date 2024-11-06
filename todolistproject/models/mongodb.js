const mongoose=require('mongoose')
const TodoSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    completed: {
      type: Boolean,
      default: false
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    dueDate:{
      type:Date,
      default: ()=>{
        const tomorow=new Date()
        tomorow.setDate(tomorow.getDate()+1)
        return tomorow
      }
    }
  });
  
  module.exports = mongoose.model('Todo', TodoSchema);