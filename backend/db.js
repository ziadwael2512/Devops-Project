const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  host: process.env.DB_HOST,         // should be 'db' inside Docker
  port: process.env.DB_PORT,         // 5432
  database: process.env.DB_NAME,     // signupdb
  user: process.env.DB_USER,         // postgres
  password: process.env.DB_PASSWORD, // postgres
});

// Create users table if it doesn't exist
(async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100)
      );
    `);
    console.log("✅ Users table ready");
  } catch (err) {
    console.error("❌ Error creating users table:", err);
  }
})();

module.exports = pool;
