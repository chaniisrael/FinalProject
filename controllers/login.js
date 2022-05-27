const db = require('../models'); //contain the Contact model, which is accessible via db.Contact
let atob = require('atob');
exports.findUserName = (req, res, next) => {
    // req.body.password=window.atob(req.body.password);
    //  req.body.password= atob(req.body.password);
    console.log(req.body.password);
    // console.log("חני")
    // console.log('find '+req.body.mail);
    db.Users.findAll({where: {userName: req.body.userName, password: req.body.password}})
        .then((result) => {
            // console.log(result+"jbh")
            if (result.length === 0)
                return res.render('login', {message2: "השם משתמש או הסיסמה שגויים"});
            else
                return res.render('menu-login', {message3: "ברוכה הבאה" + " " + req.body.userName});
            // return res.json('הינך רשום לאתר');

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
exports.addingDetilsFromQuestionnaire = (req, res, next) => {
    console.log("ppppppppppppppppppppppp")
    console.log(req.body.name)
    //let ifThereComplexity = req.body.ifThereComplexity;//האם ידוע על מורכבות כלשהי
    // let propertyType = req.body.propertyType;;//מהו סוג הנכס
    // let propertyAreaYouPurchasing = req.body.propertyAreaYouPurchasing;//באיזה ישוב נמצא הנכס שאתם רוכשים
    // let age = req.body.age;//  גיל (תאריך לידה
    //let accountStatus = req.body.accountStatus;//מצב חשבון ב3 חודשים אחרונים
    // let problemType = req.body.problemType;//סוג בעיה
    // let problemOneLastTime = req.body.problemOneLastTime;//מתי היה בעיה בפעם האחרונה
    debugger;
    // משתנים לפונקציות
    let constructionAnomalies = false;//יש בנכס הנרכש חריגות בניה
    let vacationApartment = false;//אנו רוכשים דירת נופש
    let NotPurchasedFromContractorEndNoForm4 = false;//הנכס לא נירכש מקבלן ואין לו טופס 4
    let purchaseInTrust = false;
    ;//אנו עושים רכישה בנאמנות
    let theRightsSettlementProcessHasNotBeenCompleted = false;//תהליך הסדרת זכויות לא הושלם
    let buyersReceivers = false;//אנו רוכשים מכונס נכסים

    IfThereComplexity(req.body.ifThereComplexity);//האם ידוע על מורכבות כלשהי


    console.log(constructionAnomalies);
    PropertyType(req.body.propertyType);//מהו סוג הנכס
    let equity = req.body.equity;//מהו ההון עצמי
    let valueOfTheConference = req.body.valueOfTheConference;//מהו שווי הנכס
    PropertyAreaYouPurchasing(req.body.propertyAreaYouPurchasing);//באיזה ישוב נמצא הנכס שאתם רוכשים
    let name = req.body.name;//שם הרוכש
    Age(req.body.age);//  גיל (תאריך לידה
    let education = req.body.education;// השכלה
    TheJob(req.body.theJob);//עבודה
    // let theJob = req.body.theJob;// עבודה
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
    AccountStatus(req.body.accountStatus);//מצב חשבון ב3 חודשים אחרונים
    let typeOfIncome = req.body.typeOfIncome;// סוג הכנסה
    let monthlyIncomeLevel = req.body.monthlyIncomeLevel;//גובה הכנסה חודשית
    let typeOfCommitment = req.body.typeOfCommitment;//סוג התחיבות
    let monthlyPaymentAmountOnCommitment = req.body.monthlyPaymentAmountOnCommitment;//גובה תשלום חודשי
    ProblemType(req.body.problemType)//סוג בעיה
    ProblemOneLastTime(req.body.problemOneLastTime);//מתי היה בעיה בפעם האחרונה


    return res.render('forms', {message90: constructionAnomalies});

    // let name=req.body.name;
    // console.log(name);

//-------------------------------------------------------------------

//--------------------------------------------------------------------------
    function IfThereComplexity(ifThereComplexity) {

        for(let i = 0 ; i<ifThereComplexity.length ;i++)

        switch (ifThereComplexity[i]) {

            case "3":
                constructionAnomalies = true;//יש בנכס הנרכש חריגות בניה
                break;
            case "4":
                vacationApartment = true;//אנו רוכשים דירת נופש
                break;
            case "5":
                NotPurchasedFromContractorEndNoForm4 = true;//הנכס לא נירכש מקבלן ואין לו טופס 4
                break;
            case "6":
                purchaseInTrust = true;//אנו עושים רכישה בנאמנות
                break;
            case "8":
                theRightsSettlementProcessHasNotBeenCompleted = true;//תהליך הסדרת זכויות לא הושלם
                break;
            case "9":
                buyersReceivers = true;//אנו רוכשים מכונס נכסים
                break;
            default:
        }
    }

//-------------------------------------------------------------
    function PropertyType(propertyType) {
        let rtmentFromCPR = false;//דירה מקבלן
        let apartmentPricePeroccupant = false;//ירה מחיר למשתכן
        let secondHandApartment = false;//דירה יד שניה
        let privateHouse = false;//בית פרטי
        let SelfBuiltHouse = false;//בית בבניה עצמית
        let field = false;//מגרש
        switch (propertyType) {

            case "1":
                rtmentFromCPR = true;//דירה מקבלן
                break;
            case "2":
                apartmentPricePeroccupant = true;//ירה מחיר למשתכן
                break;
            case "3":
                secondHandApartment = true;//דירה יד שניה
                break;
            case "4":
                privateHouse = true;//בית פרטי
                break;
            case "5":
                SelfBuiltHouse = true;//בית בבניה עצמית
                break;
            case "6":
                field = true;//מגרש
                break;
            default:
        }

    }

//---------------------------------------------------------------------
    function PropertyAreaYouPurchasing(propertyAreaYouPurchasing) {
        let centerArea = false;
        let northRegionArea = false;
        let southernArea = false;
        switch (propertyAreaYouPurchasing) {

            case "centerArea":
                centerArea = true;//הנכס באזור המרכז
                break;
            case "northRegionArea":
                northRegionArea = true//הנכס באזור הצפון
                break;
            case "southernArea":
                southernArea = true;//הנכס באזור הדרום
                break;
            default:
        }
    }

//-------------------------------------------------------------------
    function Age(age) {
        let lessThan18 = false;
        let between18And40 = false;
        let between40And70 = false;
        let over70 = false;

        switch (age) {

            case "lessThan18":
                lessThan18 = true;//פחות 18
                break;
            case "between18And40":
                between18And40 = true//בין 18 ל40
                break;
            case "between40And70":
                between40And70 = true;//בין 40 ל70
                break;
            case "over70":
                over70 = true;//מעל 70
                break;
            default:
        }
    }

//--------------------------------------------------------------------
    function TheJob(job) {
        let employee = false;
        let independent = false;
        let notEmployee = false;
        switch (job) {

            case "employee":
                employee = true;//שכיר
                break;
            case "independent":
                independent = true//עצמאי
                break;
            case "notEmployee":
                notEmployee = true;// לא עובד
                break;

            default:
        }
    }

//--------------------------------------------------------------
    function AccountStatus(accountStatus) {
        let plus = false;
        let deviation = false;
        switch (accountStatus) {

            case "plus":
                plus = true;//שכיר
                break;
            case "deviation":
                deviation = true//עצמאי
                break;
            default:
        }
    }

//-----------------------------------------------------------
    function ProblemType(problemType) {
        let checks = false;
        let subordinatedLoans = false;
        let execution = false;
        let limitedAccount = false;
        switch (problemType) {

            case "checks":
                checks = true;//צקים ללא כיסוי
                break;
            case "subordinatedLoans":
                subordinatedLoans = true//הלוואות בפיגור
                break;
            case "execution":
                execution = true//הוצאה לפועל
                break;
            case "limitedAccount":
                limitedAccount = true//חשבון מוגבל
                break;
            default:
        }
    }

//---------------------------------------------------------------------
    function ProblemOneLastTime(problemOneLastTime) {
        let lessThanHaifYear = false;
        let betweenHaifYearAndYear = false;
        let betweenOnYearAndThreeYears = false;
        let OverHisYears = false;
        switch (problemOneLastTime) {

            case "lessThanHaifYear":
                lessThanHaifYear = true;//פחות מחצי שנה
                break;
            case "betweenHaifYearAndYear":
                betweenHaifYearAndYear = true//בין חצי שנה לשנה
                break;
            case "betweenOnYearAndThreeYears":
                betweenOnYearAndThreeYears = true//בין שנה ל3 שנים
                break;
            case "OverHisYears":
                OverHisYears = true//מעל 3 שנים
                break;
            default:
        }
    }
}