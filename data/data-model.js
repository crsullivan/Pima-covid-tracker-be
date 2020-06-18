const db = require('../database/dbconfig')

module.exports = {
    getData,
    addData
};

function getData(){
    return db('admin')
    .select('admin.*')
}

function addData(info) {
    return db('data')
        .insert({
            ...info,
        }).catch(e => {
            throw e;
        })
}