const User = require("../model/user")
const jwt = require('jsonwebtoken');

exports.addUser = async (req, res) => {
    try {
        user = await User.create(req.body)
        const token = jwt.sign({ _id: user._id }, process.env.TOKEN);

        res.status(200).json({
            user: user,
            token: token
        })
    } catch (error) {
        return res.status(404).json({
            error: error.message
        })
    }
}

exports.getUser = async (req, res) => {
    try {
        let user = await User.findById({ _id: req.body.id }).select('todo -_id').populate('todo', 'details')

        res.status(200).json({
            user: user,
        })
    } catch (error) {
        return res.status(404).json({
            error: error.message
        })
    }
}

exports.addToDo = async (req, res) => {
    try {
        let user = await User.findByIdAndUpdate(req.body.id, {
            $set: {
                todo: req.body.todo
            }
        })
        if (user) {
            return res.status(200).json({
                user: user,
            })
        } else {
            return res.status(200).json({
                msg: 'no such user'
            })
        }
    } catch (error) {
        return res.status(404).json({
            error: error.message
        })
    }
}

exports.updateToDo = async (req, res) => {
    try {
        let user = await User.findByIdAndUpdate(req.body.id, {
            $push: {
                todo: req.body.todo
            }
        }, { new: true })
        if (user) {
            return res.status(200).json({
                user: user
            })
        } else {
            return res.status(200).json({
                msg: 'no such user'
            })
        }
    } catch (error) {
        return res.status(404).json({
            error: error.message
        })
    }
}

exports.deleteToDo = async (req, res) => {
    try {
        let user = await User.findByIdAndUpdate(req.body.id, {
            $pull: {
                todo: {
                    name: req.body.todo
                }
            }
        }, { new: true })
        if (user) {
            return res.status(200).json({
                user: user
            })
        } else {
            return res.status(200).json({
                msg: 'no such user'
            })
        }
    } catch (error) {
        return res.status(404).json({
            error: error.message
        })
    }
}

exports.getToDo = async (req, res) => {
    try {
        let todo = await User.findOne(
            {
                'todo._id': req.body.todo_id,
                _id: req.body.id
            }, {
            'todo.$': 1
        })
        if (todo) {
            return res.status(200).json({
                todo: todo
            })
        } else {
            return res.status(200).json({
                msg: 'no such user'
            })
        }
    } catch (error) {
        return res.status(404).json({
            error: error.message
        })
    }
}

