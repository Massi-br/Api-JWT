const mongoose = require('mongoose');
const {Schema} = mongoose;

const BoxSchema = new Schema({
    x: Number,
    y: Number,
    isAllowed: Boolean,
    maze: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'Maze'}
    ]
})

const Box = mongoose.model('Box', BoxSchema);

module.exports = Box;
