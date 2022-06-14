const db = require('../models'); //contain the Contact model, which is accessible via db.Contact
const express = require('express');
var router = express.Router();
const matchController = require("../controllers/match");

router.post('/match' ,matchController.matchmaking);
module.exports = router;