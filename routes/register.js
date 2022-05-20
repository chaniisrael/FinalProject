let express = require('express');
let router = express.Router();
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
router.post('/from',loginController.addingDetilsFromQuestionnaire)
router.post('/save', loginController.addEmail);
router.post('/findIfExit', loginController.findEmail);
module.exports = router;
