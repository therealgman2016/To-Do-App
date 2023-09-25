const Todo = require('../models/todo')

module.exports = {
    create,
    delete: deleteItem
}

async function create(req, res) {
    const todo = await Todo.findById(req.params.id)

    req.body.user = req.user._id
    req.body.userName = req.user.name
    req.body.userAvatar = req.user.userAvatar

    todo.todoItem.push(req.body)
    try {
        await todo.save()
    } catch (err) {
        console.log(err)
    }

    res.redirect(`/todos/${todo._id}`)
}

async function deleteItem(req, res) {
    const todo = await Todo.findOne({'todoItem._id': req.params.id, 'todoItem.user': req.user._id})

    if(!todo) return res.redirect('/todos')

    todo.todoItem.remove(req.params.id)
    await todo.save()
    
    res.redirect(`/todos/${todo._id}`)
}