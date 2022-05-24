const express = require('express');
const multer = require("multer");
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads")
    },
    filename: function (req, file, cb) {
        console.log(req);
        console.log(file);
        file.filename = file.fieldname+".png";
        cb(null,file.filename)
    },
    limits : 5000
})
const upload = multer({ storage: storage,onFileUploadStart:()=>{console.log("start..")}, }).single("myFiles");
const upload1 = multer({ storage: storage,onFileUploadStart:()=>{console.log("start..")}, }).single("myFiles1");
const upload11 = multer({ storage: storage,onFileUploadStart:()=>{console.log("start..")}, }).single("myFiles11");
const upload111 = multer({ storage: storage,onFileUploadStart:()=>{console.log("start..")}, }).single("myFiles111");
const router = express.Router();
// const multipart = require('connect-multiparty');
router.post('/saveFiles' ,function(req, res,next) {

    upload(req, res, function (err)
    {
        if(err)
            console.log(err);
    })}
);
router.post('/saveFiles1' ,function(req, res,next) {

    upload1(req, res, function (err)
    {
        if(err)
            console.log(err);
    })}
);
router.post('/saveFiles11' ,function(req, res,next) {

    upload11(req, res, function (err)
    {
        if(err)
            console.log(err);
    })}
);
router.post('/saveFiles111' ,function(req, res,next) {

    upload111(req, res, function (err)
    {
        if(err)
            console.log(err);
    })}
);
module.exports = router;
