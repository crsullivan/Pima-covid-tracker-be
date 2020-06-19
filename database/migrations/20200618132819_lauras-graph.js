
exports.up = function(knex) {

    return knex.schema
    .createTable('admin', t => {
        t.increments();
        t.text('password', 250).notNullable();
        t.text('name', 250).notNullable().unique();;
    })

    .createTable('data', t => {
        t.increments();
        t.text('date', 250).notNullable();
        t.integer('value', 250).notNullable();;
    })

  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('data')
    .dropTableIfExists('admin')
};
