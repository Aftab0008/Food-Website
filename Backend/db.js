import pkg from "pg";
const { Pool } = pkg;
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT), // Convert port to a number
  
});

pool.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch(err => console.error("Database connection error", err));

export default pool;
