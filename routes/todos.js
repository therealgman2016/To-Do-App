// routes/todos.js

var express = require('express');
var router = express.Router();


// Require the controller that exports To-Do CRUD functions
const todosCtrl = require('../controllers/todos');

// // FOR NOW, THIS IS JUST MAKING A NEW ITEM, NOT A NEW TODO MODEL YET. THAT IS NEXT

// router.get('/', todosCtrl.create);

// DO THESE TWO LINES NEED TO BE IN OTHER ROUTES FILE?
// const todosItemsCtrl = require('../controllers/todosItems');
// router.get('/newItems', todosItemsCtrl.new)

router.get('/', todosCtrl.index)
router.get('/newList', todosCtrl.new)
router.post('/', todosCtrl.create)




module.exports = router