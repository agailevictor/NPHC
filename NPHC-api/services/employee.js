var db = require('../db/dbConnection');

var employeeManagementService = {
  handlefetchAllEmployees: function () {
    try {
      return new Promise((resolve, reject) => {
        db.query('CALL SP_FetchAllEmployees()', [], (error, rows) => {
          if (error) {
            reject(error);
          }
          else {
            resolve(rows);
          }
        });
      });
    } catch (e) {
      console.log("Error in handlefetchAllEmployees : " + e);
    }
  },
  handleDeleteEmployee: function (data) {
    try {
      return new Promise((resolve, reject) => {
        db.query('CALL SP_DeleteEmployee(?)', [data], (error, rows) => {
          if (error) {
            reject(error);
          }
          else {
            resolve(rows);
          }
        });
      });
    } catch (e) {
      console.log("Error in handleDeleteEmployee : " + e);
    }
  }
};
module.exports = employeeManagementService;