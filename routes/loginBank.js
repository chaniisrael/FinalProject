let express = require('express');
const loginController = require("../controllers/login");
let router = express.Router();

router.post('/menuBank', function(req, res, next) {
    res.render('menuBank',{message14: ""});
});
router.get('/menuBank', function(req, res, next) {
    res.render('menuBank',{message14: ""});
});
router.get('/loginBank', function(req, res, next) {
    res.render('loginBank',{message13: ""});
});
router.post('/loginBank', function(req, res, next) {
    res.render('loginBank',{message13: ""});
});
router.get('/requestsDirected', function(req, res, next) {
    res.render('requestsDirected');
});
router.post('/requestsDirected', function(req, res, next) {
    res.render('requestsDirected');
});
router.post('/bank',loginController.bank);

module.exports = router;