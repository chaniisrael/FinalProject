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
router.get('/question', function(req, res, next) {

  res.render('question');
});
router.post('question', function(req, res, next) {
  res.render('question');
});
router.get('/trackRequest', function(req, res, next) {
  res.render('trackRequest');
});
router.post('/trackRequest', function(req, res, next) {
  res.render('trackRequest');
});
router.get('/files', function(req, res, next) {
  res.render('files');
});

router.post('/files', function(req, res, next) {
  res.render('files');
});


// router.get('/register', function(req, res, next) {
//
//   res.redirect('/index');
// });
module.exports = router;
