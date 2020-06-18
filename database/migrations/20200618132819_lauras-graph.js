
exports.up = function(knex) {

    return knex.schema
    .createTable('admin', t => {
        t.increments();
        t.string('password', 25).notNullable();
        t.text('name', 25).notNullable().unique();;
    })

    .createTable('data', t => {
        t.increments();
        t.string('date', 5).notNullable();
        t.integer('value', 5).notNullable();;
    })

  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('data')
    .dropTableIfExists('admin')
};
