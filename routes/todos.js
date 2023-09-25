const express = require('express');
const router = express.Router();


// Require the controller that exports To-Do CRUD functions
const todosCtrl = require('../controllers/todos');
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/', todosCtrl.index)
router.get('/newList', ensureLoggedIn, todosCtrl.new)
router.get('/:id', todosCtrl.show)
router.post('/', ensureLoggedIn, todosCtrl.create)




module.exports = router