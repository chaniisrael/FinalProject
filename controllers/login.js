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
     let name = req.body.name;
     let date = req.body.date;
     let education = req.body.education;
     let theJob = req.body;


    return  res.render('forms',{message90:req.body.date});

    // let name=req.body.name;
    // console.log(name);
}