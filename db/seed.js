const mongoose = require('mongoose');
const User = require('../models/User');
const Maze = require('../models/Maze');
const Box = require('../models/Box');
const seedBox1 = require('./maze1');
const seedBox2 = require('./maze2');
const crypto = require("crypto");

mongoose.connect('mongodb://localhost/technicaltest')
    .then(() => {
        console.log('Mongo connection open');
    })
    .catch((err) => {
        console.log(err)
    });

const salt = crypto.randomBytes(16).toString('hex');
// Data array containing seed data - documents organized by Model
const seedUser = [
    {
        'username': 'TestUser',
        'email': 'test@clacdesdoigts.com',
        'bio': "Developer",
        'salt': salt,
        'hash': crypto.pbkdf2Sync('password', salt, 10000, 512, 'sha512').toString('hex')
    }
];

const seedMaze = [
    {
        '_id': '63ad77776ef9fef3107fe251',
        'name': 'Maze1',
    },
    {
        '_id': '63ad77776ef9fef3107fe252',
        'name': 'Maze2',
    }
]


const seedDB = async () => {
    await User.deleteMany({});
    await User.insertMany(seedUser)
    await Maze.deleteMany({});
    await Maze.insertMany(seedMaze)
    await Box.deleteMany({});
    await Box.insertMany(seedBox1);
    await Box.insertMany(seedBox2);
}

seedDB().then(() => {
    console.log('Seed completed successfully ')
    mongoose.connection.close();
})