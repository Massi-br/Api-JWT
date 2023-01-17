const resolver = require('../helpers/resolver')
const assert = require('assert');
const Box = require('../models/Box');
const mongoose = require("mongoose");

describe('Resolve mazes', function () {
    before(function () {
        mongoose.Promise = global.Promise;
        mongoose.set('strictQuery', true);
        mongoose.connect('mongodb://localhost/technicaltest');
        mongoose.connection
            .once('open', () => console.log('Connected!'))
            .on('error', (error) => {
                console.warn('Error : ',error);
            });
    })

    describe('Maze 1', function () {
        it('should return find the shortest path', async function () {

            const boxes = await Box.find({'maze': '63ad77776ef9fef3107fe251'}).exec().then((maze) => maze); // /!\ FIXED  /!\


            const start = boxes.find(element => element.x === 5 && element.y === 0);
            const end = boxes.find(element => element.x === 9 && element.y === 10);

            // assert.equal(resolver.resolver(boxes, start, end), 15);
        });
    });

    describe('Maze 2', function () {
        it('should return find the shortest path', async function () {

            const boxes = await Box.find({'maze': '63ad77776ef9fef3107fe252'}).exec().then((maze) => maze);

            const start = boxes.find(element => element.x === 0 && element.y === 5);
            const end = boxes.find(element => element.x === 12 && element.y === 3);

            // assert.equal(resolver.resolver(boxes, start, end), 23);

        });

        it('should not be resolvable', async function () {

            const boxes = await Box.find({'maze': '63ad77776ef9fef3107fe252'}).exec().then((maze) => maze);

            const start = boxes.find(element => element.x === 0 && element.y === 5);
            const end = boxes.find(element => element.x === 12 && element.y === 2);

            // assert.equal(resolver.resolver(boxes, start, end), false);

        });
    });

    after(function () {
       mongoose.connection.close();
    });
});

