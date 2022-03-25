let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/register', function(req, res, next) {

  res.render('register',{message1:""});
});
router.get('/login', function(req, res, next) {

  res.render('login',{message2:""});
});
router.post('index', function(req, res, next) {
  res.render('index');
});
router.get('/questionnaire', function(req, res, next) {

  res.render('questionnaire');
});
router.post('questionnaire', function(req, res, next) {
  res.render('questionnaire');
});

// router.get('/register', function(req, res, next) {
//
//   res.redirect('/index');
// });
module.exports = router;
