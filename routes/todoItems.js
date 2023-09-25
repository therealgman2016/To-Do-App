const express = require('express')
const router = express.Router()
const todosItemsCtrl = require('../controllers/todosItems');



router.post('/todos/:id/todoItem', todosItemsCtrl.create)

module.exports = router
