const express = require('express');
const { addToDo, addUser, updateToDo, deleteToDo, getToDo, getUser, getAllToDo } = require('../controller/user');
const { Auth } = require('../middleware/Auth');
const router = express.Router();

router.get('/getUser', Auth, getUser)
router.post('/addUser',addUser)
router.post('/addToDo', Auth,addToDo)
router.post('/updateToDo',Auth, updateToDo)
router.delete('/deleteToDo', Auth,deleteToDo)
router.get('/getToDo', Auth,getToDo)
router.get('/getAllToDo', Auth,getAllToDo)

module.exports = router