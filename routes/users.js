var express = require('express');
var router = express.Router();

const loginController = require('../controllers/login');

router.post('/findEmail',loginController.findEmail);
router.post('/findUserName',loginController.findUserName);
router.post('/findRequests',loginController.findRequests);
router.post('/findIfComments',loginController.findIfComments);



module.exports = router;
