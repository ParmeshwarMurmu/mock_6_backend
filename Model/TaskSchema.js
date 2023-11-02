const mongoose = require('mongoose')

const TaskSchema = mongoose.Schema({
	title : String,
	description : String,
	status : {type: String, enum: ['Todo', 'Doing', 'Done'], default: 'Todo'},
	subtask : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subtask'}]
}, {
    versionKey: false
})

const TaskModel = mongoose.model('Task', TaskSchema)

module.exports = {
    TaskModel
}