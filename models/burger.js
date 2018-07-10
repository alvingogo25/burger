var orm = require("../config/orm.js");

var burger = {
// selectAll function
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
// insert function
  create: function(cols, vals, cb) {
    orm.insert("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
// update function
  update: function(objColVals, devoured, cb) {
    orm.update("burgers", objColVals, devoured, function(res) {
      cb(res);
    });
  }
// delete function
  // delete: function(burgerid, cb) {
  //   orm.delete("burgers", burgerid, function(res) {
  //     cb(res);
  //   });
  // }
};

module.exports = burger;
