const db = require("../models");
exports.ifCustonerFilledQuestionnaire = (req,res,next)=>{

    db.asset.findAll({where: {email:req.session.userName}})
        .then((result) => {
            // if (result.length === 0) {
                 res.render('question');
            // }
            // else
            // {
            //     return res.render('forms', {message90: "בקשתך נקלטה. עבור ללשונית צרוף מסמכים בכדי להשלם את תהליך הבקשה "});
            // }

        })
        .catch((err) => {
            console.log('There was an error querying contacts', JSON.stringify(err))
            return res.send(err)
        });
}
exports.addingDetilsFromQuestionnaire = (req, res, next) => {

    //משתנים של גיל
    let ageLessThan18 = false;
    let ageBetween18And40 = false;
    let ageBetween40And70 = false;
    let ageOver70 = false;
    Age(req.body.age);//  גיל (תאריך לידה

    if(ageLessThan18=== true||ageOver70=== true)
    {
        return res.render('forms', {message90: "אתה לא עומד בתנאים נסה בעוד חצי שנה"});

    }
        // אם ידוע על מורכבות כךשהח משתנים לפונקציות
        let constructionAnomalies = false;//יש בנכס הנרכש חריגות בניה
        let vacationApartment = false;//אנו רוכשים דירת נופש
        let NotPurchasedFromContractorEndNoForm4 = false;//הנכס לא נירכש מקבלן ואין לו טופס 4
        let purchaseInTrust = false;//אנו עושים רכישה בנאמנות
        let theRightsSettlementProcessHasNotBeenCompleted = false;//תהליך הסדרת זכויות לא הושלם
        let buyersReceivers = false;//אנו רוכשים מכונס נכסים
        IfThereComplexity(req.body.ifThereComplexity);//האם ידוע על מורכבות כלשהי

// משתנים לפונקציה מה סוג הנכס
        let rtmentFromCPR = false;//דירה מקבלן
        let apartmentPricePeroccupant = false;//ירה מחיר למשתכן
        let secondHandApartment = false;//דירה יד שניה
        let privateHouse = false;//בית פרטי
        let SelfBuiltHouse = false;//בית בבניה עצמית
        let field = false;//מגרש
        PropertyType(req.body.propertyType);//מהו סוג הנכס

        let equity = req.body.equity;//מהו ההון עצמי
        let valueOfTheConference = req.body.valueOfTheConference;//מהו שווי הנכס

        //משתנים באיזה אזור נמצא הנכס
        let centerArea = false;
        let northRegionArea = false;
        let southernArea = false;
        PropertyAreaYouPurchasing(req.body.propertyAreaYouPurchasing);//באיזה ישוב נמצא הנכס שאתם רוכשים

        db.asset.create({
            email: req.session.userName,
            constructionAnomalies: constructionAnomalies,
            vacationApartment: vacationApartment,
            NotPurchasedFromContractorEndNoForm4: NotPurchasedFromContractorEndNoForm4,
            purchaseInTrust: purchaseInTrust,
            theRightsSettlementProcessHasNotBeenCompleted: theRightsSettlementProcessHasNotBeenCompleted,
            buyersReceivers: buyersReceivers,
            rtmentFromCPR: rtmentFromCPR,
            apartmentPricePeroccupant: apartmentPricePeroccupant,
            secondHandApartment: secondHandApartment,
            privateHouse: privateHouse,
            SelfBuiltHouse: SelfBuiltHouse,
            field: field,
            equity: equity,
            valueOfTheConference: valueOfTheConference,
            centerArea: centerArea,
            northRegionArea: northRegionArea,
            southernArea: southernArea
        })
            .then((result) => {
                // return res.render('login', {message2: "ההרשמה בוצע בהצלחה"});
            })
            .catch((err) => {
                console.log('There was an error querying contacts', JSON.stringify(err))
                return res.send(err)
            });
        let name = req.body.name;//שם הרוכש



        let education = req.body.education;// השכלה

        //משתנים של סוג עבודה
        let employee = false;
        let independent = false;
        let notEmployee = false;
        TheJob(req.body.theJob);//עבודה

        db.PersonalDetails.create({
            email: req.session.userName,
            name: name,
            ageLessThan18: ageLessThan18,
            ageBetween18And40: ageBetween18And40,
            ageBetween40And70: ageBetween40And70,
            ageOver70: ageOver70,
            education: education,
            employee: employee,
            independent: independent,
            notEmployee: notEmployee
        })
            .then((result) => {
                // return res.render('login', {message2: "ההרשמה בוצע בהצלחה"});
            })
            .catch((err) => {
                console.log('There was an error querying contacts', JSON.stringify(err))
                return res.send(err)
            });
        let seniorityInWork = req.body.seniorityInWork;//וותק בתפקיד
        let businessSeniority = req.body.businessSeniority;// וותק העסק
        let seniorityInOffice = req.body.seniorityInOffice;// וותק בתפקיד
        let seniorityInRecentWork = req.body.seniorityInRecentWork;//וותק בעבודה האחרונה
        let lastWorkEndTime = req.body.lastWorkEndTime;//זמן סיום עבודה אחרונה
        let averageMonthlyIncome = req.body.monthlySalaryInLastJob + req.body.amountOfThePension + req.body.heightOfStipination +
            req.body.scholarshipAmount + req.body.monthlyIncomeLevel - req.body.monthlyPaymentAmountOnCommitment;
        let theBank = req.body.theBank;// הבנק בו מתנהל החשבון

        //משתנים של מצב חשבון
        let plus = false;
        let deviation = false;
        AccountStatus(req.body.accountStatus);//מצב חשבון ב3 חודשים אחרונים

        let typeOfIncome = null;
        let typeOfCommitment = null;
        if (req.body.moreRevenue === 'yes1') {
            typeOfIncome = req.body.typeOfIncome;// סוג הכנסה
        }
        if (req.body.commitment === 'yes1') {
            // let monthlyIncomeLevel = req.body.monthlyIncomeLevel;//גובה הכנסה חודשית
            typeOfCommitment = req.body.typeOfCommitment;//סוג התחיבות
            // let monthlyPaymentAmountOnCommitment = req.body.monthlyPaymentAmountOnCommitment;//גובה תשלום חודשי
        }

        //סוג הבעיה
        let checks = false;
        let subordinatedLoans = false;
        let execution = false;
        let limitedAccount = false;
        if (req.body.pansyProblem === 'yes1') {
            ProblemType(req.body.problemType)//סוג בעיה
        }

        // מתי היה בעיה בפעם האחרונה
        let lessThanHaifYear = false;
        let betweenHaifYearAndYear = false;
        let betweenOnYearAndThreeYears = false;
        let OverHisYears = false;
        if (req.body.pansyProblem === 'yes1') {
            ProblemOneLastTime(req.body.problemOneLastTime);//מתי היה בעיה בפעם האחרונה
        }
        db.WorkDetails.create({
            email: req.session.userName,
            seniorityInWork: seniorityInWork,
            businessSeniority: businessSeniority,
            seniorityInOffice: seniorityInOffice,
            seniorityInRecentWork: seniorityInRecentWork,
            lastWorkEndTime: lastWorkEndTime,
            averageMonthlyIncome: averageMonthlyIncome,
            theBank: theBank,
            plus: plus,
            deviation: deviation,
            typeOfIncome: typeOfIncome,
            typeOfCommitment: typeOfCommitment,
            checks: checks,
            subordinatedLoans: subordinatedLoans,
            execution: execution,
            limitedAccount: limitedAccount,
            lessThanHaifYear: lessThanHaifYear,
            betweenHaifYearAndYear: betweenHaifYearAndYear,
            betweenOnYearAndThreeYears: betweenOnYearAndThreeYears,
            OverHisYears: OverHisYears
        })
            .then((result) => {
                // return res.render('login', {message2: "ההרשמה בוצע בהצלחה"});
            })
            .catch((err) => {
                console.log('There was an error querying contacts', JSON.stringify(err))
                return res.send(err)
            });


        return res.render('forms', {message90: "בקשתך נקלטה. עבור ללשונית צרוף מסמכים בכדי להשלם את תהליך הבקשה "});
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


        switch (age) {

            case "lessThan18":
                ageLessThan18 = true;//פחות 18
                break;
            case "between18And40":
                ageBetween18And40 = true//בין 18 ל40
                break;
            case "between40And70":
                ageBetween40And70 = true;//בין 40 ל70
                break;
            case "over70":
                ageOver70 = true;//מעל 70
                break;
            default:
        }
    }

//--------------------------------------------------------------------
    function TheJob(job) {

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