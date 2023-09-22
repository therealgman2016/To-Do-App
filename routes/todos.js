// routes/todos.js

var express = require('express');
var router = express.Router();

// Require the controller that exports To-Do CRUD functions
var todosCtrl = require('../controllers/todos');

// All actual paths begin with "/todos"

// GET /todos
router.get('/', todosCtrl.index);

router.get('/:id', todosCtrl.show)

module.exports = router