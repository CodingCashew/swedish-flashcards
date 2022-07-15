const { Pool } = require ('pg');
// v-- REPLACE THE EMPTY STRING WITH YOUR LOCAL/MLAB/ELEPHANTSQL URI
const myURI = 'postgres://jadedjdq:UtOHen0maCbbyVVq-dKdySl7z8BufOfi@ziggy.db.elephantsql.com/jadedjdq';

// UNCOMMENT THE LINE BELOW IF USING MONGO
// const URI = process.env.MONGO_URI || myURI;

// UNCOMMENT THE LINE BELOW IF USING POSTGRESQL
const URI = process.env.PG_URI || myURI;

const pool = new Pool({
  connectionString: URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};