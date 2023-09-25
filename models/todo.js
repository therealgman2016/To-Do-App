const mongoose = require('mongoose')

const Schema = mongoose.Schema


const todoItemSchema = new Schema({
    item: String,
    isDone: String
})

const todoSchema = new Schema({
    name: String,
    todoItem: [todoItemSchema],
})



module.exports = mongoose.model('Todo', todoSchema)

