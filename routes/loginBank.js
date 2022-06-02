let express = require('express');
let router = express.Router();

router.post('/menuBank', function(req, res, next) {
    res.render('menuBank');
});
router.get('/menuBank', function(req, res, next) {
    res.render('menuBank');
});
router.get('/loginBank', function(req, res, next) {
    res.render('loginBank');
});
router.post('/loginBank', function(req, res, next) {
    res.render('loginBank');
});
router.get('/requestsDirected', function(req, res, next) {
    res.render('requestsDirected');
});
router.post('/requestsDirected', function(req, res, next) {
    res.render('requestsDirected');
});
module.exports = router;