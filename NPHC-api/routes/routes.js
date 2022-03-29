const express = require('express');
const router = express.Router({ mergeParams: true });

var employeeController = require('../controller/employee');

const schemas = require('../schemas');
const middleware = require('../middleware');

router.post('/greetings', middleware.validateBody(schemas.greetingsSchema), employeeController.greeting);
router.get('/hello', employeeController.hello);
router.get('/employees', employeeController.fetchAllEmployees);
router.delete('/employee/:Id', middleware.validatePath(schemas.deleteSchema), employeeController.deleteEmployee);


module.exports = router;