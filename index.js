const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');

const user = require('./router/user')

dotenv.config()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '50mb', extended: true }));

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
}, () => {
    console.log('connected')
})

mongoose.connection.on('error', (err) => {
    console.error(err)
})

app.use('/user',user)

app.all('*', (req, res, next) => {
    return res.status(404).json({
        msg: 'no such page',
        status: 'false'
    })
})

app.listen(3000, () => {
    console.log('connected to port 3000')
})