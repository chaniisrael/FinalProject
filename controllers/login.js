const db = require('../models'); //contain the Contact model, which is accessible via db.Contact

const nodemailer = require("nodemailer")

exports.findUserName = (req, res, next) => {
    req.session.userName = req.body.userName;

    db.Users.findAll({where: {userName: req.session.userName, password: req.body.password}})
        .then((result) => {
            // console.log(result+"jbh")
            if (result.length === 0)
                return res.render('login', {message2: "השם משתמש או הסיסמה שגויים"});
            else {
                req.session.email = result[0].mail
                req.session.firstName = result[0].firstName
                req.session.lastName = result[0].lastName
                return res.render('menuLogin', {message3: "ברוכה הבאה" + " " +  result[0].firstName+" "+result[0].lastName});
            }

        })
        .catch((err) => {
            console.log('There was an error querying contacts', JSON.stringify(err))
            return res.send(err)
        });


};
exports.findEmail = (req, res, next) => {
    console.log('find ' + req.body.mail);
    req.session.firstName = req.body.firstName;
    req.session.lastName = req.body.lastName;
    req.session.phone = req.body.phone;
    req.session.mail = req.body.mail;
    db.Users.findAll({where: {mail: req.body.mail}})
        .then((result) => {
            console.log(result)
            if (result.length === 0)
                return res.render('password');
            else
                return res.render('register', {message1: "המשתמש קיים"});

        })
        .catch((err) => {
            console.log('There was an error querying contacts', JSON.stringify(err))
            return res.send(err)
        });


};

exports.addEmail = (req, res, next) => {
    // console.log('sdsdfsdf'+req.body.password);
    let password = req.body.password;
    let userName = req.body.userName;
    let firstName = req.session.firstName;
    let lastName = req.session.lastName;
    let mail = req.session.mail;
    let phone = req.session.phone;
     req.session.userName = userName;
    db.Users.create({
        userName: userName, password: password, firstName: firstName,
        lastName: lastName, phone: phone, mail: mail
    })
        .then((result) => {
            return res.render('login', {message2: "ההרשמה בוצע בהצלחה"});
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

exports.findRequests = (req, res, next) => {
    // db.RequestsInProcess.update({nameCustomer:"דבורה בוכבינדר "}, {where: {id:"8", nameBank: "מרכנתיל"}})
    console.log(req.session.email)

    db.RequestsInProcess.findAll({where: {email:req.session.email}})
        .then((result) => {
             console.log(result)
            if (result.length === 0)
             return res.json('הינך רשום לאתר');
            else {
                console.log(result[0])
                return res.json(result);
                // debugger;

            }
            // return res.json('הינך רשום לאתר');

        })
        .catch((err) => {
            console.log('There was an error querying contacts', JSON.stringify(err))
            return res.send(err)
        });


};
exports.findIfComments = (req, res, next) => {


    db.files.findAll({where: {email:req.session.email}})
        .then((result) => {
            console.log(result)
            if (result.length === 0)
                return res.json('הינך רשום לאתר');
            else {

                console.log(result[0])
                return res.json(result);
            }

        })
        .catch((err) => {
            console.log('There was an error querying contacts', JSON.stringify(err))
            return res.send(err)
        });


};


exports.sendEmail = (req, res, next) => {
    req.body.message;
    let transporter = nodemailer.createTransport({
        service:"gmail" ,
        auth:{
            user:"chanais@edu.hac.ac.il",
            pass:"211429568",
        },
        rejectUnauthorized: false,
    });

    let mailOptions = {
        from:"chanais@edu.hac.ac.il",
        to: req.session.email,
        subject:"ממתינה לך הודעה חדשה באתר בתיבת הודעות",
        text:"שלום"+" "+req.session.firstName +" "+req.session.lastName+" "+"היקר/ה"+" "+req.body.message+" "+ "תודה",


    };
    transporter.sendMail(mailOptions)
        .then(function (res) {
            console.log("Email send");
        })
        .catch(function (err) {
            console.log(err)
        });
}
// node_modules\.bin\sequelize model:generate --name questionnaire --attributes email:string,constructionAnomalies:bool,vacati
// onApartment:bool,NotPurchasedFromContractorEndNoForm4:bool,purchaseInTrust:bool,theRightsSettlementProcessHasNotBeenCompleted:bool,buyersReceivers:bool,rtmentFromC
// PR:bool,apartmentPricePeroccupant:bool,secondHandApartment:bool,privateHouse:bool,SelfBuiltHouse:bool,field:bool,equity:string,valueOfTheConference:string,centerAr
// ea:bool,northRegionArea:bool,southernArea:bool,name:string,ageLessThan18:bool,ageBetween18And40:bool,ageBetween40And70:bool,ageOver70:bool,education:string,employe
// e:bool,independent:bool,notEmployee:bool,seniorityInWork:string,businessSeniority:string,seniorityInOffice:string,seniorityInRecentWork:string,lastWorkEndTime:stri
// ng,averageMonthlyIncome:string,theBank:string,plus:bool,deviation:bool,typeOfIncome:string,typeOfCommitment:string,checks:bool,subordinatedLoans:bool,execution:boo
// l,limitedAccount:bool,lessThanHaifYear:bool,betweenHaifYearAndYear:bool,betweenOnYearAndThreeYears:bool,OverHisYears:bool


// node_modules\.bin\sequelize model:generate --name questionnaire --attributes email:string,constructionAnomalies:string,vacati
// onApartment:string,NotPurchasedFromContractorEndNoForm4:string,purchaseInTrust:string,theRightsSettlementProcessHasNotBeenCompleted:string,buyersReceivers:string,rtmentFromC
// PR:string,apartmentPricePeroccupant:string,secondHandApartment:string,privateHouse:string,SelfBuiltHouse:string,field:string,equity:string,valueOfTheConference:string,centerAr
// ea:string,northRegionArea:string,southernArea:string,name:string,ageLessThan18:string,ageBetween18And40:string,ageBetween40And70:string,ageOver70:string,education:string,employe
// e:string,independent:string,notEmployee:string,seniorityInWork:string,businessSeniority:string,seniorityInOffice:string,seniorityInRecentWork:string,lastWorkEndTime:stri
// ng,averageMonthlyIncome:string,theBank:string,plus:string,deviation:string,typeOfIncome:string,typeOfCommitment:string,checks:string,subordinatedLoans:string,execution:string
// ,limitedAccount:string,lessThanHaifYear:string,betweenHaifYearAndYear:string,betweenOnYearAndThreeYears:string,OverHisYears:string

// node_modules/.bin/sequelize model:generate --name asset --attributes email:string,constructionAnomalies:boolean,vacationApartment:boolean,NotPurchasedFromContractorEndNoForm4:boolean,purchaseInTrust:boolean,theRightsSettlementProcessHasNotBeenCompleted:boolean,buyersReceivers:boolean,rtmentFromCPR:boolean,apartmentPricePeroccupant:boolean,secondHandApartment:boolean,privateHouse:boolean,SelfBuiltHouse:boolean,field:boolean,equity:string,valueOfTheConference:string,centerArea:boolean,northRegionArea:boolean,southernArea:boolean

 // node_modules/.bin/sequelize model:generate --name PersonalDetails --attributes email:string,name:string,ageLessThan18:boolean,ageBetween18And40:boolean,ageBetween40And70:boolean,ageOver70:boolean,education:string,employee:boolean,independent:boolean,notEmployee:boolean

// node_modules\.bin\sequelize db:migrate

// node_modules/.bin/sequelize model:generate --name WorkDetails --attributes email:string,seniorityInWork:string,businessSeniority:string,seniorityInOffice:string,seniorityInRecentWork:string,lastWorkEndTime:string,averageMonthlyIncome:string,theBank:string,plus:boolean,deviation:boolean,typeOfIncome:string,typeOfCommitment:string,checks:boolean,subordinatedLoans:boolean,execution:boolean,limitedAccount:boolean,lessThanHaifYear:boolean,betweenHaifYearAndYear:boolean,betweenOnYearAndThreeYears:boolean,OverHisYears:boolean



// node_modules/.bin/sequelize model:generate --name BankSideProperties --attributes bankName:string,constructionAnomalies:boolean,vacationApartment:boolean,NotPurchasedFromContractorEndNoForm4:boolean,purchaseInTrust:boolean,theRightsSettlementProcessHasNotBeenCompleted:boolean,buyersReceivers:boolean,rtmentFromCPR:boolean,apartmentPricePeroccupant:boolean,secondHandApartment:boolean,privateHouse:boolean,SelfBuiltHouse:boolean,field:boolean,centerArea:boolean,northRegionArea:boolean,southernArea:boolean

