const mongoose = require('mongoose');
const { Schema } = mongoose;


const MazeSchema = new Schema({
    name: {
        type: String,
        lowercase: true,
        unique: true,
        required: [true, "can't be blank"],
        index: true
    },
    boxes : [
        {type: mongoose.Schema.Types.ObjectId,ref:'Box'}
    ]
})

const Maze = mongoose.model('Maze', MazeSchema);

module.exports = Maze;
