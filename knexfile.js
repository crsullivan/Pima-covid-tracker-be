module.exports = {

  development: {
    client: 'pg',
    connection: {
      filename: './database/lauras-graph.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  },
  testing: {
    client: "pg",
    useNullAsDefault: true,
    connection: {
        filename: "./database/test.db3"
    },
    migrations: {
        directory: './database/migrations'
    },
    seeds: {
        directory: './database/seeds'
    },
    pool: {
        afterCreate: (connection, done) => {
            connection.run("PRAGMA foreign_keys = ON", done)
        }
    }
},
  staging: {
    client: 'pg',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './database/migrations'
  },
  seeds: {
      directory: './database/seeds'
  },
  },
};

