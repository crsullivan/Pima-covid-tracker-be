const db = require('../database/dbconfig')

module.exports = {
    getData,
    addData
};

function getData(){
    return db('admin')
    .select('admin.*')
}

function addData(id, puzzle) {
    return db('puzzles')
        .where({ id })
        .update(puzzle, '*')
}