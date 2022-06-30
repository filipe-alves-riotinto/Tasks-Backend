// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: 'postgresql',
  connection: {
    database: 'tasks',
    user:     'postgres',
    password: '751953'
  },
  pool: {     min: 0,     max: 5,     acquireTimeoutMillis: 60000,     idleTimeoutMillis: 600000, },
 // debug: true,
  migrations: {
    tableName: 'knex_migrations'
  }


};
