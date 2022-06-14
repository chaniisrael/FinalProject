const db = require('../models'); //contain the Contact model, which is accessible via db.Contact
const express = require('express');
var router = express.Router();
const { Op } = require("sequelize");
const nodemailer = require("nodemailer");



let transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"chanais@edu.hac.ac.il",
        pass:"211429568"
    },
    tls:{
        rejectUnauthorized: false,
    }
});
let mailOptions ={
    from: "chanais@edu.hac.ac.il",
    to: "chaniexo16@gmail.com",
    subject:"hii",
    text:"jbsjcnvnkfvnbk nckbn ",

}

exports.matchmaking = (req, res, next) => {

    transporter.sendMail(mailOptions)
        .then(function(res){
            console.log("Email send")
        })
        .catch(function (err)
        {
            console.log(err)
        })


    // let basicMatch = criticalMatch(req.session.email);
    // if (basicMatch.length >3)
    //     console.log("true")
}
const criticalMatch = (email) => {
    let ageLessThan18;
    let ageBetween40And70;
    let ageOver70;
    //משתנים של סוג עבודה
    let employee;
    let independent;
    let notEmployee;
    let name;
    // db.PersonalDetails.findAll({where:{email:req.session.userName}
    db.PersonalDetails.findAll({where:{email:"חני"}
    }).then((result) => {
        console.log("PersonalDetails result "+result.length);
        ageLessThan18 = result[0].ageLessThan18;
        ageBetween40And70 = result[0].ageBetween40And70;
        ageOver70 = result[0].ageOver70;
        employee = result[0].employee;
        independent = result[0].independent;
        notEmployee = result[0].notEmployee;
        name = result[0].name;
        db.PersonalDetailsBankSide.findAll({where:{ageLessThan18:{[Op.or]: [true,ageLessThan18]}
                ,ageBetween40And70:{[Op.or]: [true,ageBetween40And70]}
                ,ageOver70:{[Op.or]: [ageOver70,true]}
                ,employee:{[Op.or]:[employee,true]}
                ,independent:{[Op.or]:[independent,true]}
                ,notEmployee:{[Op.or]:[notEmployee,true]}
            }
        }).then((result) => {
            db.RequestsInProcess.create({
                email:email,
                nameBank: result[0].nameBank,
                nameCustomer: name,
                requestHeight: "500,000",
                amountOfEquity: "300,000",
                file1: "https://www.w3schools.com/html/html_formatting.asp",
                file2: "https://www.w3schools.com/html/html_formatting.asp",
                file3: "https://www.w3schools.com/html/html_formatting.asp",
                file4: "https://www.w3schools.com/html/html_formatting.asp",
                remarks: "חזרו צקים לפני למעלה משנה",
                applicationProcess:"הבקשה בתהליך"
            })

        }).then((result) => {


        })
        .catch((err) => {
            console.log('There was an error querying contacts', JSON.stringify(err))
        });

      })
      .catch((err) => {
           console.log('There was an error querying contacts', JSON.stringify(err))
           });


}
