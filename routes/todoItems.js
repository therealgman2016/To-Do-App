const express = require('express')
const router = express.Router()
const todosItemsCtrl = require('../controllers/todosItems');



router.post('/todos/:id/todosItem', todosItemsCtrl.create)

module.exports = router
