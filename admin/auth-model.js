const db = require('../database/dbconfig.js');

module.exports = {
    add,
    findBy,
    getAll
};

async function add(user) {
    return await db('admin')
        .insert({
            ...user,
    })
    .catch(error => {
      throw error;
    });
}

function findBy(name) {
    return db('admin').where(name);
  }

function getAll() {
    return db('admin')
}
