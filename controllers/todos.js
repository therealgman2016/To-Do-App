const Todo = require('../models/todo')

module.exports = {
    index,
    show,
    new: newTodo,
    create
}



async function index(req, res) {
    const todos = await Todo.find({});
    res.render('todos', { title: 'All Lists', todos });
}


async function show(req, res) {
    const todo = await Todo.findById(req.params.id)
    res.render('todos/show', { title: 'List Detail', todo })
}

function newTodo(req, res) {
    res.render('todos/newList', { errorMsg: '' })
}

async function create(req, res) {
    try {
        await Todo.create(req.body)
        res.redirect('/todos')

    } catch (err) {
        console.log(err)
    }

    // res.redirect(`/todos/${todoItem._id}`)
}

