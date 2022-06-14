let express = require('express');
const loginController = require("../controllers/login");
const bankController = require("../controllers/banks");

let router = express.Router();

router.post('/menuBank', function(req, res, next) {
    res.render('menuBank',{message14:"ברוכה הבאה בנק"+" "+req.session.bankName});
});
router.get('/menuBank', function(req, res, next) {

    res.render('menuBank',{message14:"ברוכה הבאה בנק"+" "+req.session.bankName});
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
router.post('/bank',bankController.bank);
router.post('/findRequestsDirected',bankController.findRequestsDirected);
router.post('/updateRequestsInProcess',bankController.updateRequestsInProcess);


module.exports = router;