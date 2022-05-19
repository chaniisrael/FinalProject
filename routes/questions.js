var express = require('express');
var router = express.Router();
const loginController = require('../colntrollers/login');
 console.log("chaniisrae")

router.get('/forms', function(req, res, next) {
    console.log('hiiiii')
     res.render('forms');
});
router.post('/forms', function(req, res, next) {
 console.log('hiiiii')
    res.render('forms');

    // res.render('question/question1');
});
// router.get('/question1', function(req, res, next) {
//     console.log('hiiiii')
//     res.render('question/question1');
// });
// router.get('/question2', function(req, res, next) {
//     res.render('question/question2');
// });
// router.get('/question3', function(req, res, next) {
//     res.render('question/question3');
// });
// router.get('/question4', function(req, res, next) {
//     res.render('question/question4');
// });
// router.get('/question5', function(req, res, next) {
//     res.render('question/question5');
// });
// router.get('/question6', function(req, res, next) {
//     res.render('question/question6');
// });
// router.get('/question7', function(req, res, next) {
//     res.render('question/question7');
// });
// router.get('/question8', function(req, res, next) {
//     res.render('question/question8');
// });
// router.get('/question9', function(req, res, next) {
//     res.render('question/question9');
// });
// router.get('/question10', function(req, res, next) {
//     res.render('question/question10');
// });
// router.get('/question11', function(req, res, next) {
//     res.render('question/question11');
// });
// router.get('/question12', function(req, res, next) {
//     res.render('question/question12');
// });
// router.get('/question13', function(req, res, next) {
//     res.render('question/question13');
// });
// router.get('/question14', function(req, res, next) {
//     res.render('question/question14');
// });
// router.get('/question15', function(req, res, next) {
//     res.render('question/question15');
// });
// router.get('/question16', function(req, res, next) {
//     res.render('question/question16');
// });
// router.get('/question17', function(req, res, next) {
//     res.render('question/question17');
// });
// router.get('/question18', function(req, res, next) {
//     res.render('question/question18');
// });
// router.get('/question19', function(req, res, next) {
//     res.render('question/question19');
// });
// router.get('/question20', function(req, res, next) {
//     res.render('question/question20');
// });
// router.get('/question21', function(req, res, next) {
//     res.render('question/question21');
// });
// router.get('/question22', function(req, res, next) {
//     res.render('question/question22');
// });
// router.get('/question23', function(req, res, next) {
//     res.render('question/question23');
// });
 module.exports = router;
