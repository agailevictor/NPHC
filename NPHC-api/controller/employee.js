const moment = require('moment');
const HttpStatus = require('http-status-codes');

var employeeManagementService = require('../services/employee');

let employeeContoller = {
  hello(req, res) {
    var response = {};
    var source = '2021-04-21 07:00:00';
    var isoString = new Date(source).toISOString();
    response.original = moment(source, 'YYYY-MM-DD HH:mm:ss').utc().format('YYYY-MM-DD HH:mm:ss');
    response.utcstring = new Date(source).toUTCString();
    response.isostring = new Date(source).toISOString();
    response.momentstring = moment.utc(isoString).format('YYYY-MM-DD HH:mm:ss');
    return res.status(HttpStatus.StatusCodes.OK).json(response);
  },
  greeting(req, res) {
    const { name, message } = req.body;
    var response = {};
    response.message = `Hello ${name}, ${message}!`
    return res.status(HttpStatus.StatusCodes.OK).json(response);
  },
  fetchAllEmployees(req, res) {
    employeeManagementService.handlefetchAllEmployees(req).then(result => {
      return res.status(HttpStatus.StatusCodes.OK).json({ "employees": result[0] });
    }).catch(error => {
      return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    })
  },
  deleteEmployee(req, res) {
    employeeManagementService.handleDeleteEmployee(req.params.Id).then(result => {
      return res.status(HttpStatus.StatusCodes.NO_CONTENT).json({ "status": result[0] });
    }).catch(error => {
      return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    })
  }
};
module.exports = employeeContoller;