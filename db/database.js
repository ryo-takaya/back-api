const path = require("path");
const ENV_PATH = path.join(__dirname, ".env");
require("dotenv").config({ path: ENV_PATH });
const knex = require("knex");
const db = knex(process.env.DATABASE_URL);

module.exports = db;
