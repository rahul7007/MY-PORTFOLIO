const mongoose = require('mongoose')

mongoose
    // .connect('mongodb://127.0.0.1:27017/portfolio', { useNewUrlParser: true })
    .connect('mongodb+srv://rahul:password12345Abcde@portfolio.wuawd.mongodb.net/portfolio?retryWrites=true&w=majority', { useNewUrlParser: true })
    
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db