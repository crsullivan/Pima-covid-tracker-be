const db = require('../database/dbconfig.js');

module.exports = {
    add,
    findBy,
    getAll
};

async function add(user) {
    if (process.env.DB_ENV === 'production') {
      console.log(db.insert(user).into('admin').returning('id'), "add method")
      return db.insert(user).into('admin').returning('id')
      .then(ids=> {
        console.log(ids[0]);
        return findById(ids[0]);
      })
      .catch(error => {
        console.log(error);
        throw error;
      });
    } else {
      console.log(user)
      const [id] = await db('admin').insert(user)
      return findById(id)
    }
  }

function findById(id) {
    return db('admin')
    .where({id})
    .first()
    .catch(error=> {
        console.log("Error finding by id");
        throw error;
    });
}


function findBy(name) {
  return db('admin')
  .where(name)
  .catch(error=> {
    console.log("Error finding by name");
    throw error;
});
}

function getAll() {
    return db('admin')
}
