const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mySchema = new Schema(
    {
        projectid: {type: String, required: true, unique : true},
        projectname: { type: String, required: true},
        technology: {type: String, required: true},
        description: {type: String, required: true}
    },
)

module.exports = mongoose.model('projects', mySchema)