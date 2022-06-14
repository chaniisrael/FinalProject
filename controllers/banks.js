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
//
// db.WorkDetailsBankSide.create({nameBank:"פאגי",plus:true,
//     deviation:true,checks:false,
//     subordinatedLoans:false,execution:true,limitedAccount:false,lessThanHaifYear:false,betweenHaifYearAndYear:false,
//     betweenOnYearAndThreeYears:true,OverHisYears:true})
//     .then((result)=>{
//         return res.render('menuBank',{message14:"ברוכה הבאה בנק"+" "+req.body.nameBank});
//
//         // console.log("in result")
//         // return res.render('loginBank', {message13: "השם או הסיסמה אינם נכונים"});
//     })
//     .catch((err) => {
//         console.log('There was an error querying contacts', JSON.stringify(err))
//         return res.send(err)
//     });
// };




