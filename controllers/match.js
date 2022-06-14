const db = require('../models'); //contain the Contact model, which is accessible via db.Contact
const express = require('express');
var router = express.Router();
const { Op } = require("sequelize");
// var transport = nodemailer.createTransport({
//     host: "smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//         user: "a81a7e21a80b15",
//         pass: "ee4799abd60db4"
//     }
// });
// const Email = require("email");
var sendmail = require('sendmail')




exports.matchmaking = (req, res, next) => {
    sendmail({
        from: 'test@yourdomain.com',
        to: 'chaniexo16@gmail.com',
        replyTo: 'jason@yourdomain.com',
        subject: 'MailComposer sendmail',
        html: 'Mail of test sendmail '
    }, function (err, reply) {
        console.log(err && err.stack)
        console.dir(reply)
    })
    // Email.send({
    //     Host : "smtp.mailtrap.io",
    //     Username : "<Mailtrap username>",
    //     Password : "<Mailtrap password>",
    //     To : 'chaniexo16@gmail.com',
    //     From : "sender@example.com",
    //     Subject : "Test email",
    //     Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
    // }).then(
    //     message => alert(message)
    // );
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
