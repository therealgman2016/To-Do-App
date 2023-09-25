const Todo = require('../models/todo')

module.exports = {
    index,
    create,
    new: newTodo
}

// BELOW CODE TAKEN OUT TO FIX REFERENCE ERROR
// async function index(req, res) {
//     const todos = await Todo.find({});
//     res.render('todos/index', todos);
// }


async function index(req, res) {
    const todos = await Todo.find({});
    res.render('todos', { title: 'All Lists', todos });
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

function newTodo(req, res) {
    res.render('todos/newList', { errorMsg: '' })
}