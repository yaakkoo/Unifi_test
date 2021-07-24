const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    name: String,
    details: String
})

const userSchema = new mongoose.Schema({
    name: String,
    todo: [todoSchema]
})

const User = mongoose.model('todo', userSchema)

module.exports = User