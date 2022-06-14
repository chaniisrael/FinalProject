var express = require('express');
var router = express.Router();
// const loginController = require('../colntrollers/login');

router.get('/forms', function(req, res, next) {
     res.render('forms');
});
router.post('/forms', function(req, res, next) {
    res.render('forms');

});

 module.exports = router;
