const express = require('express')
const router = express.Router()
const todosItemsCtrl = require('../controllers/todosItems');
const ensureLoggedIn = require('../config/ensureLoggedIn')



router.post('/todos/:id/todoItem', ensureLoggedIn, todosItemsCtrl.create)
router.delete('/todoItem/:id', ensureLoggedIn, todosItemsCtrl.delete)

module.exports = router
