// Set up MySQL connection.
require("dotenv").config();

var keys = require('./keys.js');
var mysql = require("mysql");

var password = keys.password.key;

var connection = mysql.createConnection(process.env.JAWSDB_URL
//   {
//   port: 3306,
//   host: "localhost",
//   user: "root",
//   password: password,
//   database: "burgers_db"
// }
);

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
