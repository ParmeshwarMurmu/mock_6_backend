const mongoose = require('mongoose')

const BoardSchema = mongoose.Schema({
    name: String,
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task'}]
}, {
    versionKey: false
})

const BoardModel = mongoose.model('board', BoardSchema)

module.exports = {
    BoardModel
}