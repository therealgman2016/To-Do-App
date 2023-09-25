const Todo = require('../models/todo')

module.exports = {
    create
}

async function create(req, res) {
    const todo = await Todo.findById(req.params.id)

    todo.todoItem.push(req.body)
    try {
        await todo.save()
    } catch (err) {
        console.log(err)
    }

    res.redirect(`/todos/${todo._id}`)
}
