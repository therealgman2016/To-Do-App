const Todo = require('../models/todo')

module.exports = {
    create,
    new: newItem
}

async function create(req, res) {
    const todo = await Todo.findById(req.params.id)

    todo.todoItem.push(req.body)
    try {
        await todo.save()
    } catch (err) {
        console.log(err)
    }

    res.redirect(`/todos/${todoItem._id}`)
}

function newItem(req, res) {
        res.render('todos/newItem', { errorMsg: '' })
    }