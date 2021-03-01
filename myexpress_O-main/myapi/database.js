const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'tvt20spo',
  password: 'netpass',
  database: 'tvt20spo'
});
module.exports = connection;