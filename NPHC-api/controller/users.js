const moment = require('moment');
const HttpStatus = require('http-status-codes');

let userContoller = {
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
  deleteTransaction(req, res) {
    const { Id } = req.params;
    var response = {};
    response.message = `Deleted ${Id}!`
    return res.status(HttpStatus.StatusCodes.OK).json(response);
  }
};
module.exports = userContoller;