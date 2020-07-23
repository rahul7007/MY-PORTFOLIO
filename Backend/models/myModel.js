const mongoose = require('mongoose')
const Schema = mongoose.Schema

const aboutMeSchema = new Schema(
    {
        id: {type: String, required: true, unique : true},
        name: { type: String, required: true},
        designation: {type: String, required: true},
        avatar: {type: String, required: true},
        bio: {type: String, required: true},
        education: {type: String, required: true},
        workexp: {type: String, required: true},
        awards: {type: String, required: true}
    },
)

module.exports = mongoose.model('aboutme', aboutMeSchema)