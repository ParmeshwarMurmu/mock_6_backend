const mongoose = require('mongoose')

const SubTaskSchema = mongoose.Schema({
    title : String,
	isCompleted : Boolean
}, {
    versionKey: false
})

const SubTaskModel = mongoose.model('Subtask', SubTaskSchema)

module.exports = {
    SubTaskModel
}