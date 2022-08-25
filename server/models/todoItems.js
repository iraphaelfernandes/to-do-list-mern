
const mongoose = require('mongoose');

const TodoItemSchema = new mongoose.Schema({
     item:{
          type:String,
          required: true
     },
          
     completed: {
          type: Boolean,
          default: false
     }
})

module.exports = mongoose.model('todo', TodoItemSchema);



