var orm = require("../config/orm.js");

var burger = {
// selectAll function
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
// insertOne function
  create: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
// updateOne function
  update: function(objColVals, devoured, cb) {
    orm.updateOne("burgers", objColVals, devoured, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
