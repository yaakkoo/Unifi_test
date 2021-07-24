const express = require('express');
const { addToDo, addUser, updateToDo, deleteToDo, getToDo, getUser, getAllToDo } = require('../controller/user');
const { Auth } = require('../middleware/Auth');
const router = express.Router();

router.get('/getUser', Auth, getUser)
router.post('/addUser', addUser)
router.post('/addToDo', addToDo)
router.post('/updateToDo', updateToDo)
router.delete('/deleteToDo', deleteToDo)
router.get('/getToDo', getToDo)
router.get('/getAllToDo', getAllToDo)

module.exports = router