let express = require('express');
const coustomerQuestionnaireController = require("../controllers/coustomerQuestionnaire");
const loginController = require('../controllers/login');

let router = express.Router();

// router.get('/question', function(req, res, next) {
//
//     res.render('question');
// });
// router.post('question', function(req, res, next) {
    router.get('/question',coustomerQuestionnaireController.ifCustonerFilledQuestionnaire);

    // res.render('question');
// });

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
module.exports = router;
