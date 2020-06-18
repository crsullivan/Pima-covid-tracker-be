const db = require('../database/dbconfig.js');

module.exports = {
    add,
    findBy,
    getAll
};

async function add(user) {
  if (process.env.DB_ENV === 'production') {
    return db.insert(user).into('admin').returning('id')
    .then(ids=> {
      return findById(ids[0]);
    })
    .catch(error => {
      throw error;
    });
  } else {
    const [id] = await db('admin').insert(user)
    return findById(id)
  }
}

function findBy(name) {
    return db('admin').where(name);
  }

function getAll() {
    return db('admin')
}
