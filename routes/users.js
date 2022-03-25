var express = require('express');
var router = express.Router();

const loginController = require('../controllers/login');

/* GET users listing. */
 console.log('22');
// router.get('/', function(req, res, next) {
//   res.render('index');
// });
router.post('/findEmail',loginController.findEmail);
router.post('/findUserName',loginController.findUserName);
module.exports = router;
