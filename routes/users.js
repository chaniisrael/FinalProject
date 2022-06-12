var express = require('express');
var router = express.Router();

const loginController = require('../controllers/login');


router.post('/findEmail',loginController.findEmail);
router.post('/findUserName',loginController.findUserName);
router.post('/findRequests',loginController.findRequests);
router.post('/findRequestsDirected',loginController.findRequestsDirected);
router.post('/updateRequestsInProcess',loginController.updateRequestsInProcess);


module.exports = router;
