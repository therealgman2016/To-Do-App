const express = require('express');
const router = express.Router();


// Require the controller that exports To-Do CRUD functions
const todosCtrl = require('../controllers/todos');


router.get('/', todosCtrl.index)
router.get('/newList', todosCtrl.new)
router.get('/:id', todosCtrl.show)
router.post('/', todosCtrl.create)




module.exports = router