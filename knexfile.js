// Update with your config settings.
module.exports = {
    development: {
      client: 'pg',
      connection: {
        host: 'db',
        database: 'alphabeta',
        user: 'alphabeta',
        password: 'alphabeta',
      },
      pool: {
        min: 2,
        max: 10,
      },
      migrations: {
        directory: 'dist/migrations/'
      }
    },
    production: {
      client: 'pg',
      connection: process.env.DATABASE_URL
    },
    pool: {
      min: 2,
      max: 10,
    },

  };
