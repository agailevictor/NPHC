const express = require('express');
const router = express.Router({ mergeParams: true });

var userController = require('../controller/users');

const schemas = require('../schemas');
const middleware = require('../middleware');

router.post('/greetings', middleware.validateBody(schemas.greetingsSchema), userController.greeting);
router.get('/hello', userController.hello);
router.delete('/delete/:Id', middleware.validatePath(schemas.deleteSchema), userController.deleteTransaction);


module.exports = router;