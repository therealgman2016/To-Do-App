const express = require('express')
const router = express.Router()
const todosItemsCtrl = require('../controllers/todosItems');



router.post('/newItem', todosItemsCtrl.new)

module.exports = router
