let express = require('express');
let router = express.Router();
let btoa = require('btoa');
const loginController = require('../controllers/login');

/* GET home page. */

router.get('/', function(req, res, next) {
    res.render('register',{message1:""});

});

//------------------------------------------------------------------------------------------------------------------------
router.post('/password', function(req, res, next) {
    console.log('password....');
    req.session.firstName=req.body.firstName;
    req.session.lastName=req.body.lastName;
    req.session.phone=req.body.phone;
    req.session.mail=req.body.mail;
    // req.session.password=req.body.password;

    // req.session.password=window.btoa(req.body.password);
    res.render('password');
});
//------------------------------------------------------------------------------------------------------------------------------
router.get('/password', function(req, res, next) {

    res.redirect('/register');
});
//------------------------------------------------------------------------------
// router.get('/forms', function(req, res, next) {
//     req.session.name=req.body.name;
//     console.log(req.session.name);
//     debugger;
//     res.render('forms');
// });
// router.post('/forms', function(req, res, next) {
//     req.session.name=req.body.name;
//     console.log(req.session.name);
//     debugger;
//     res.render('forms');
// });

// router.post('index', function(req, res, next) {
//     res.render('index');
// });
router.post('/forms',loginController.addingDetilsFromQuestionnaire)

 router.post('/save', loginController.addEmail);
router.post('/findIfExit', loginController.findEmail);
// router.post('/save', function(req, res, next) {
//     req.body.password =btoa(req.body.password);
//     router.post('/save', loginController.addEmail);
// });
module.exports = router;
