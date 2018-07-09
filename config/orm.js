var connection = require("./connection.js");

function printQuestionMarks(val) {
  val = '?'
  return val;
};

function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
};

var orm = {

// selectAll query
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },

// insertOne query
  insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals);
    queryString += ") ";

    console.log(queryString);
    console.log(vals);
    connection.query(queryString, vals, function(err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    })
  },
// updateOne query
  updateOne: function(table, objColVals, devoured, cb) {
    var queryString = "UPDATE " + table;
    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += devoured;

    connection.query(queryString, function(err,res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
// deleteOne query
  deleteOne: function(table, removeBurger, cb) {
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += removeBurger;

    connection.query(queryString, function (err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  }
};

module.exports = orm;
