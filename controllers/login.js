const db = require('../models'); //contain the Contact model, which is accessible via db.Contact
let atob = require('atob');
exports.findUserName = (req, res, next) => {
    // req.session.password=window.atob(req.session.password);
    // req.body.password= atob(req.body.password);
    console.log( req.body.password);
    // console.log("חני")
    // console.log('find '+req.body.mail);
    db.Users.findAll({where: {userName:req.body.userName, password:req.body.password}})
        .then((result) => {
            // console.log(result+"jbh")
            if(result.length===0)
                return res.render('login',{message2:"השם משתמש או הסיסמה שגויים"});
            else
                return res.render('menu-login',{message3:"ברוכה הבאה"+" "+req.body.userName});
            // return res.json('הינך רשום לאתר');

        })
        .catch((err) => {
            console.log('There was an error querying contacts', JSON.stringify(err))
            return res.send(err)
        });



};
exports.findEmail = (req, res, next) => {
    console.log('find '+req.body.mail);
    req.session.firstName=req.body.firstName;
    req.session.lastName=req.body.lastName;
    req.session.phone=req.body.phone;
    req.session.mail=req.body.mail;
    db.Users.findAll({where: {mail:req.body.mail}})
        .then((result) => {
            console.log(result)
            if(result.length===0)
                return  res.render('password');
            else
                return res.render('register',{message1:"המשתמש קיים"});

        })
        .catch((err) => {
            console.log('There was an error querying contacts', JSON.stringify(err))
            return res.send(err)
        });



};

exports.addEmail = (req, res, next) => {
    // console.log('sdsdfsdf'+req.body.password);
    let password=req.body.password;
    let userName=req.body.userName;
    let firstName=req.session.firstName;
    let lastName=req.session.lastName;
    let mail=req.session.mail;
    let phone=req.session.phone;
    db.Users.create( {userName:userName,password:password,firstName:firstName,
        lastName:lastName, phone:phone, mail:mail})
        .then((result) => {
            return res.render('login',{message2:"ההרשמה בוצע בהצלחה"});
        })
        .catch((err) => {
            console.log('There was an error querying contacts', JSON.stringify(err))
            return res.send(err)
        });
    // res.render('welcome', {
    //     pageTitle: 'Add Product',
    //     path: '/welcome',
    // });

};
exports.addingDetilsFromQuestionnaire = (req, res, next) => {
    console.log("ppppppppppppppppppppppp")
    console.log(req.body.name)
    let ifThereComplexity = req.body.ifThereComplexity;//האם ידוע על מורכבות כלשהי
    let propertyType = req.body.propertyType;//מהו סוג הנכס
    let equity = req.body.equity;//מהו ההון עצמי
    let valueOfTheConference = req.body.valueOfTheConference;//מהו שווי הנכס
    let whereTheConference = req.body.whereTheConference;//באיזה ישוב נמצא הנכס שאתם רוכשים
    let name = req.body.name;//שם הרוכש
    let date = req.body.date;// תאריך לידה
    let education = req.body.education;// השכלה
    let theJob = req.body.theJob;// עבודה
    let seniorityInWork = req.body.seniorityInWork;//וותק בתפקיד
    let monthlySalary = req.body.monthlySalary;// משכורת חודשית
    let businessSeniority = req.body.businessSeniority;// וותק העסק
    let averageMonthlyIncome = req.body.averageMonthlyIncome;// הכנסה חודשית ממוצעת
    let seniorityInOffice = req.body.seniorityInOffice;// וותק בתפקיד
    let monthlySalary2 = req.body.monthlySalary2;// משכורת חודשית
    let seniorityInRecentWork = req.body.seniorityInRecentWork;//וותק בעבודה האחרונה
    let lastWorkEndTime = req.body.lastWorkEndTime;//זמן סיום עבודה אחרונה
    let monthlySalaryInLastJob = req.body.monthlySalaryInLastJob;//משכורת חודשית בעבודה האחרונה
    let amountOfThePension = req.body.amountOfThePension;//גובה קיצבת הפנסיה
    let heightOfStipination = req.body.heightOfStipination;//גובה קיצבה
    let scholarshipAmount = req.body.scholarshipAmount;//גובה מילגה
    let theBank = req.body.theBank;// הבנק בו מתנהל החשבון
    let accountStatus = req.body.accountStatus;//מצב חשבון ב3 חודשים אחרונים
    let typeOfIncome = req.body.typeOfIncome;// סוג הכנסה
    let monthlyIncomeLevel = req.body.monthlyIncomeLevel;//גובה הכנסה חודשית
    let typeOfCommitment = req.body.typeOfCommitment;//סוג התחיבות
    let monthlyPaymentAmount = req.body.monthlyPaymentAmount;//גובה תשלום חודשי
    let problemType = req.body.problemType;//סוג בעיה
    let problemOneLastTime = req.body.problemOneLastTime;//מתי היה בעיה בפעם האחרונה



    return  res.render('forms',{message90:req.body.date});

    // let name=req.body.name;
    // console.log(name);
}