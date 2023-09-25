const mongoose = require('mongoose')

const Schema = mongoose.Schema


const todoItemSchema = new Schema ({
    item: String,
    isDone: Boolean
})

const todoSchema = new Schema ({
    name: String,
    todoItem: [todoItemSchema],
    owner: { type: Schema.Types.ObjectId, ref: 'User' }
})



module.exports = mongoose.model('Todo', todoSchema)
