const db = require('../database/dbconfig')

module.exports = {
    getData,
    addData,
    removeData
};

function getData(){
    console.log(process.env)
    return db('data').catch(e => {
        throw e;
    })
}

function addData(info) {
    return db('data')
        .insert({
            ...info,
        }).catch(e => {
            throw e;
        })
}

function removeData(id) {
    return db('data')
        .where('id', id)
        .del()
}