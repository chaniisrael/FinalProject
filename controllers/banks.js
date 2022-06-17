const db = require("../models");

exports.findRequestsDirected= (req, res, next) => {
    db.RequestsInProcess.findAll({where: {nameBank:req.session.bankName}})
        .then((result) => {
            console.log(result)
            if (result.length === 0)
                return res.json('אין נתונים זמינים');
            else
                return res.json(result);
        })
        .catch((err) => {
            console.log('There was an error querying contacts', JSON.stringify(err))
            return res.send(err)
        });


};

//--------------------------------------------------------------------------------
exports.bank = (req, res, next) => {
    req.session.bankName= req.body.nameBank;

    db.Banks.findAll({where: {bankName: req.body.nameBank,password:req.body.passwordBank}})
        .then((result) => {
            console.log(result)
            if (result.length === 0)
                return res.render('loginBank', {message13: "השם או הסיסמה אינם נכונים"});

            else
                return res.render('menuBank',{message14:"ברוכה הבאה בנק"+" "+req.session.bankName});


        })
        .catch((err) => {
            console.log('There was an error querying contacts', JSON.stringify(err))
            return res.send(err)
        });


};
//--------------------------------------------------------------------------------
exports.updateRequestsInProcess= (req, res, next) => {
    // db.RequestsInProcess.update({applicationProcess:"בקשתך אושרה"}, {where: {id:req.body.id}})

    db.RequestsInProcess.update({applicationProcess:"בקשתך אושרה"}, {where: {id:req.body.id}})
        .then((result) => {
            if (result.length === 0)
                return res.json('כפתור לא נמצא');
            else {
                console.log(result)
                return res.json(result);
            }
        })
        .catch((err) => {
            console.log('There was an error querying contacts', JSON.stringify(err))
            return res.send(err)
        });
};
//----------------------------------------------------------------------------

// exports.nn= (req, res, next) => {
//     db.BankSideProperties.update({bankName:"הבינלאומי"}, {where: {id:"5"}})
//
// // db.BankSideProperties.create({bankName:"פאגי",
// //     constructionAnomalies:false,
// //     vacationApartment: true,
// //     NotPurchasedFromContractorEndNoForm4: true,
// //     purchaseInTrust:true ,
// //     theRightsSettlementProcessHasNotBeenCompleted:true ,
// //     buyersReceivers:true ,
// //     rtmentFromCPR: true,
// //     apartmentPricePeroccupant: true,
// //     secondHandApartment: false,
// //     privateHouse: false,
// //     SelfBuiltHouse: false,
// //     field:false ,
// //     centerArea:false,
// //     northRegionArea: false,
// //     southernArea:true
// // })
//     .then((result)=>{
//         return res.render('menuBank',{message14:"ברוכה הבאה בנק"+" "+req.body.nameBank});
// // node_modules/.bin/sequelize model:generate --name BankSidePropertie --attributes constructionAnomalies:boolean,vacationApartment:boolean,NotPurchasedFromContractorEndNoForm4:boolean,purchaseInTrust:boolean,theRightsSettlementProcessHasNotBeenCompleted:boolean,buyersReceivers:boolean,rtmentFromCPR:boolean,apartmentPricePeroccupant:boolean,secondHandApartment:boolean,privateHouse:boolean,SelfBuiltHouse:boolean,field:boolean,equity:string,valueOfTheConference:string,centerArea:boolean,northRegionArea:boolean,southernArea:boolean
//
//         // console.log("in result")
//         // return res.render('loginBank', {message13: "השם או הסיסמה אינם נכונים"});
//     })
//     .catch((err) => {
//         console.log('There was an error querying contacts', JSON.stringify(err))
//         return res.send(err)
//     });
// };
//
//


