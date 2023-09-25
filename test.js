require('dotenv').config()
require('./config/database')

const Todo = require('./models/todo')

Todo.create({
    name: 'example',
    todoItem: [
        {item: 'item1', isDone: true},
        {item: 'item2', isDone: false}
    ]
})