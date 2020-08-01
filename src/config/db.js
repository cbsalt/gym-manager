const { Pool } = require('pg')

module.exports = new Pool({
  user: 'postgres',
  password: 'gympass',
  host: 'localhost',
  port: 5432,
  database: 'gymmanager'
})