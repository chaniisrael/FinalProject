const db = require('../models'); //contain the Contact model, which is accessible via db.Contact
const express = require('express');
const multer = require("multer");
const fs = require("fs");
const encrypt = require('node-file-encrypt');
var encryptor = require('file-encryptor');
var path = require("path");
const tesseract = require("tesseract.js")
let {PythonShell} = require ("python-shell")
const {spawn} = require ("child_process");
const { Op } = require("sequelize");
let create = false;
let numOfFiles = 0;
let balance;
let loans;
let email;
let numOfProcessing = 0;
const editErrorMessage = (email,message) => {
    numOfProcessing = numOfProcessing -1;
    db.files.update({errorMessage:message}, {where:{email:email}})
        .then((result) => {
        })
        .catch((err) => {
            console.log('There was an error querying contacts', JSON.stringify(err))
        });
}
const checkAndSet = (email) =>{
    if (numOfFiles == 4){
        db.files.update({documentRose:true}, {where:{email:email}})
            .then((result) => {
            })
            .catch((err) => {
                console.log('There was an error querying contacts', JSON.stringify(err))
            });
    }
}
const calculateLoans = (email) =>{
    db.WorkDetails.findAll({
        where: {email: email}
    }).then((result) => {
        if(parseInt(loans)<parseInt(balance))
            return
        if ((parseInt(loans)-parseInt(balance))/36 > 100)//parseInt(result[0].averageMonthlyIncome)*0.2)
            editErrorMessage(email,"יתרת ההלוואות בחשבונך אינה מאפשרת  הלוואה נוספת");
    })
        .catch((err) => {
            console.log('There was an error querying contacts', JSON.stringify(err))
        });
    // }
}
const createDb = (email) => {
    db.files.create({email:email}).then((result) => {
        create = true;
    })
        .catch((err) => {
            console.log('There was an error querying contacts', JSON.stringify(err))
        });
}
function runPython(fileName) {
    return new Promise((resolve , reject) => {
        const childPython = spawn('C:\\Users\\devor\\AppData\\Local\\Programs\\Python\\Python310\\python.exe', [fileName], {shell: true});
        var result = '';
        childPython.stdout.on(`data` , (data) => {
            console.log("on");
            result += data.toString();
        });

        childPython.on('close' , function(code) {
            console.log("close")
            resolve(result)
        });
        childPython.on('error' , function(err){
            reject(err)
        });

    })
};
async function runTest(fileName) {
    try {
        const result = await runPython(fileName);
        let arr = result.split(" ");
        console.log(arr[0]);
        return arr;
        // fs.unlinkSync(fileName);
    } catch (err) {
        console.log(err)
    }
}
const encoded = (input,output) => {
    var key = 'My KEY For Encryption';
    encryptor.encryptFile(input, output, key, function(err) {
        if (err)
            throw err;
        // fs.unlinkSync(input);
        console.log("Successfully Encrypted!");
    });
}
const decoded = (input,output) => {
    var key = 'My KEY For Encryption';
    encryptor.decryptFile(input, output,key, function(err) {
        if (err)
            throw err;
        fs.unlinkSync(input);
        console.log("Successfully Decrypted!");
    });
}

const getImageText = async (fileName,len,logger) => {
    let result = null;
    try {
        if (fs.existsSync(fileName)) {
            if (logger) {
                const myLogger = {
                    logger: m => console.log()
                }
                result = await tesseract.recognize(fileName, len, myLogger);
            } else {
                result = await tesseract.recognize(fileName, len);
            }
            if (result) {
                return (result.data.text)
            }
        }
    } catch (err) {
        return (err.message);
    }
};
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads")
    },
    filename: function (req, file, cb) {
        file.filename = file.fieldname+".png";
        cb(null,file.filename)
    },
    limits : 5000
})
const upload = multer({ storage: storage,onFileUploadStart:()=>{console.log("start..")}, }).single("balances");
const upload1 = multer({ storage: storage,onFileUploadStart:()=>{console.log("start..")}, }).single("loans");
const upload11 = multer({ storage: storage,onFileUploadStart:()=>{console.log("start..")}, }).single("accountTransactions");
const uploadSalary = multer({ storage: storage,onFileUploadStart:()=>{console.log("start..")}, }).single("salary");
const router = express.Router();
const checkDate = async(data)=>{
    let myString = data;
    let myRegexp = /\d{2}[.\/]\d{2}(?:[-.\/]\d{2}(\d{2})?)?/g; //Check pattern only
    let validDate = /(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])?|(?:(?:16|[2468][048]|[3579][26])00)?)))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))(\4)?(?:(?:1[6-9]|[2-9]\d)?\d{2})?$/g; //Check the validity of the date
    myString = myRegexp.exec(myString);
    if(myString[0]!= null){
        myString = validDate.exec(myString[0]);
        let today = new Date();
        var pestDate = today.getDate() -7;
        today.setDate(pestDate);
        if(myString[0]!= null){
            let inputDate = new Date(myString[0]);
            fileDate = new Date (myString[0]);
            if (fileDate<today)
                return true;
            else
                return false;
        }
    }
}


router.post('/saveFiles' , function(req, res,next) {
    upload(req, res, function (err)
    {
        email = req.session.email;
        numOfFiles = numOfFiles + 1;
        checkAndSet(req.session.email);
        if(err)
            console.log(err);
        else{
            getImageText('uploads/balances.png',"eng").then (content => {
                checkDate(content).then(validDate =>{
                    if(!validDate)
                        editErrorMessage(req.session.email,"מסמך ריכוז יתרות אינו מעודכן, נא לעלות מסמך מהשבועיים האחרונים.");
                    //להחזיר הודעה ללקוח נא לצרף מסמכים תקינים
                }).catch(err =>{
                    console.log (err);
                });
                encoded('uploads/balances.png','uploads/balances.dat')
                if (!create)
                    createDb(req.session.email);
                db.files.update({file1:'uploads/balances.dat'}, {where:{email:req.session.email}})
                    .then((result) => {
                    })
                    .catch((err) => {
                        console.log('There was an error querying contacts', JSON.stringify(err))
                    });
                getImageText('uploads/balances.png',"heb").then (content => {
                    fs.writeFile('uploads/balances.txt', content,{ flag: 'a+' }, err => {
                        if (err) {
                            console.error(err);
                        }
                        //const balanceAndLoans = await
                        // runTest('./public/balances.py').then (balanceAndLoans => {
                        //     balance = balanceAndLoans[0];
                        //     loans = balanceAndLoans[1];
                        //     calculateLoans(req.session.email);
                        // });
                        console.log(content);
                        numOfProcessing = numOfProcessing +1;
                        // return res.render('forms', {message90: "בקשתך נקלטה. עבור ללשונית צרוף מסמכים בכדי להשלם את תהליך הבקשה "});
                    });
                }).catch(err =>{
                    console.log (err);
                });
            }).catch(err =>{
                console.log (err);
            })
        }
    })}
);
router.post('/saveFiles1' ,function(req, res,next) {
    upload1(req, res, function (err)
    {
        numOfFiles = numOfFiles + 1;
        checkAndSet(req.session.email);
        let enodedPath = encoded('uploads/loans.png','uploads/loans.dat')
        if (!create)
            createDb(req.session.email);
        db.files.update({file2:'uploads/loans.dat'}, {where:{email:req.session.email}})
            .then((result) => {
            })
            .catch((err) => {
                console.log('There was an error querying contacts', JSON.stringify(err))
            });
        if(err)
            console.log(err);
        // decoded('uploads/balances.dat','uploads/balances.png')
        //     getImageText('uploads/loans.png',"heb").then (content => {
        //         console.log(content);
        //     }).catch(err =>{
        //         console.log (err);
        //     })
    })}
);
router.post('/saveFiles11' ,function(req, res,next) {

    upload11(req, res, function (err)
    {
        numOfFiles = numOfFiles + 1;
        checkAndSet(req.session.email);
        encoded('uploads/accountTransactions.png','uploads/accountTransactions.dat')
        if (!create)
            createDb(req.session.email);
        db.files.update({file3:'uploads/accountTransactions.dat'}, {where:{email:req.session.email}})
            .then((result) => {
            })
            .catch((err) => {
                console.log('There was an error querying contacts', JSON.stringify(err))
            });
        if(err)
            console.log(err);
        getImageText('uploads/accountTransactions.png',"heb").then (content => {
            console.log(content);
            numOfProcessing = numOfProcessing +1;
            fs.writeFile('uploads/accountTransactions.txt', content,{ flag: 'a+' }, err => {
                if (err) {
                    console.error(err);
                }
                // runTest('./public/accountTransactions.py').then (returns => {
                //     console.log(returns)
                //     if(returns > 2)
                //         editErrorMessage(req.session.email,"חזרו 3 צ'קים ומעלה, לפי כללי בנק ישראל, לא ניתן להגיש בקשה להלוואה בחצי שנה הקרובה.")
                // });
            });
        }).catch(err =>{
            console.log (err);
        })
    })}
);
router.post('/saveFilesSalary' ,function(req, res,next) {

    uploadSalary(req, res, function (err)
    {
        numOfFiles = numOfFiles + 1;
        checkAndSet(req.session.email);
        encoded('uploads/salary.png','uploads/salary.dat')
        if (!create)
            createDb(req.session.email);
        db.files.update({file4:'uploads/salary.dat'}, {where:{email:req.session.email}})
            .then((result) => {
            })
            .catch((err) => {
                console.log('There was an error querying contacts', JSON.stringify(err))
            });
        if(err)
            console.log(err);

    })}
);
router.post('/isRose' , function(req, res,next) {
        db.feils.findAll({where: {email: email}}).then((result) => {
            if(result[0].documentRose)
                return res.json(true);
        })
            .catch((err) => {
                console.log('There was an error querying contacts', JSON.stringify(err))
            });

    }
);
router.post('/isProcessing' , function(req, res,next) {
    db.feils.findAll({
        where: {email: email}
    }).then((result) => {
        if(result[0].documentProcessed)
            return res.json(true);
        else
            return res.json(false);

    })
        .catch((err) => {
            console.log('There was an error querying contacts', JSON.stringify(err))
        });


});


module.exports = router;
