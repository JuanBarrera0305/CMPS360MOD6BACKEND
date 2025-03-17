import pgPromise from 'pg-promise';
import dotenv from 'dotenv';

dotenv.config();

const pgp = pgPromise();
const db = pgp({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  ssl: { rejectUnauthorized: false }, // SSL configuration for Render
});

// Test the connection by querying the database
db.any('SELECT NOW()')
  .then(data => {
    console.log('Database connection successful:', data);
  })
  .catch(error => {
    console.error('Database connection failed:', error);
  });

export default db;