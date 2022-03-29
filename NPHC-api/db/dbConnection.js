var mysql = require('mysql');
var config = require('../config/config.json');
var connection = mysql.createPool({

  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database

});
module.exports = connection;