const db = require('../models'); //contain the Contact model, which is accessible via db.Contact
const express = require('express');
var router = express.Router();
const { Op } = require("sequelize");
let sendmail = require('sendmail')({silent: true})
const nodemailer = require ("nodemailer")
let ageLessThan18;
let ageBetween40And70;
let ageOver70;
//משתנים של סוג עבודה
let employee;
let independent;
let notEmployee;
let name;
let bank = [];
//בעיות בבנק
let plus;
let deviation;
let checks;
let subordinatedLoans;
let execution;
let limitedAccount;
let lessThanHaifYear;
let betweenHaifYearAndYear;
let betweenOnYearAndThreeYears;
let OverHisYears;
// סוג הנכס
let constructionAnomalies;
let vacationApartment;
let NotPurchasedFromContractorEndNoForm4;
let purchaseInTrust;
let theRightsSettlementProcessHasNotBeenCompleted;
let buyersReceivers;
let rtmentFromCPR;
let apartmentPricePeroccupant;
let secondHandApartment;
let privateHouse;
let SelfBuiltHouse;
let field;
let centerArea;
let northRegionArea;
let southernArea;
let requestHeight;
let amountOfEquity;
let file1;
let file2;
let file3;
let file4;
exports.matchmaking = async (req, res, next) => {
    try {
        const basicMatch = await criticalMatch(req.session.email);
        updateBankMatch(basicMatch);
        console.log("basic match" +basicMatch.length);
        if(basicMatch.length>3){
            const betterMatch = await middleMatch(req.session.email);
            console.log("betterMatch "+betterMatch.length);
            if(betterMatch.length>3){
                console.log("better");
                const bestMatch = await lastMatch(req.session.email);
                console.log("bestMatch "+ bestMatch.length);
                if(bestMatch.length>2){
                    console.log("best >2");
                    updateBankMatch(bestMatch);
                }else{
                    console.log("else");
                    updateBankMatch(betterMatch);
                }
            }
            else{
                updateBankMatch(betterMatch);
            }
            updateMatch(req.session.email);
        }
    } catch (err) {
        console.log(err)
    }

}
const  criticalMatch = async (userName) => {

    return db.PersonalDetails.findAll({where:{email:userName}
    }).then((result) => {
        console.log("PersonalDetails result "+result.length);
        ageLessThan18 = result[0].ageLessThan18;
        ageBetween40And70 = result[0].ageBetween40And70;
        ageOver70 = result[0].ageOver70;
        employee = result[0].employee;
        independent = result[0].independent;
        notEmployee = result[0].notEmployee;
        name = result[0].name;
        return db.PersonalDetailsBankSide.findAll({where:{ageLessThan18:{[Op.or]: [true,ageLessThan18]}
                ,ageBetween40And70:{[Op.or]: [true,ageBetween40And70]}
                ,ageOver70:{[Op.or]: [ageOver70,true]}
                ,employee:{[Op.or]:[employee,true]}
                ,independent:{[Op.or]:[independent,true]}
                ,notEmployee:{[Op.or]:[notEmployee,true]}
            }
        }).then((result) => {

            return result;

        })
            .catch((err) => {
                console.log('There was an error querying contacts', JSON.stringify(err))
            });

    })
        .catch((err) => {
            console.log('There was an error querying contacts', JSON.stringify(err))
        });
}
const middleMatch = async (userName) => {
    return db.WorkDetails.findAll({
        where: {email: userName}
    }).then((result) => {
        plus = result[0].plus;
        deviation = result[0].deviation;
        checks = result[0].checks;
        subordinatedLoans = result[0].subordinatedLoans;
        execution = result[0].execution;
        limitedAccount = result[0].limitedAccount;
        lessThanHaifYear = result[0].lessThanHaifYear;
        betweenHaifYearAndYear = result[0].betweenHaifYearAndYear;
        betweenOnYearAndThreeYears = result[0].betweenOnYearAndThreeYears;
        OverHisYears = result[0].OverHisYears;
        return db.WorkDetailsBankSide.findAll({
            where: {
                nameBank: {[Op.or]: [bank[0], bank[1], bank[2]]}
                , plus: {[Op.or]: [true, plus]}
                , deviation: {[Op.or]: [deviation, true]}
                , checks: {[Op.or]: [checks, true]}
                , subordinatedLoans: {[Op.or]: [subordinatedLoans, true]}
                , execution: {[Op.or]: [execution, true]}
                , limitedAccount: {[Op.or]: [limitedAccount, true]}
                , lessThanHaifYear: {[Op.or]: [lessThanHaifYear, true]}
                , betweenHaifYearAndYear: {[Op.or]: [betweenHaifYearAndYear, true]}
                , betweenOnYearAndThreeYears: {[Op.or]: [betweenOnYearAndThreeYears, true]}
                , OverHisYears: {[Op.or]: [OverHisYears, true]}
            }
        }).then((result) => {
            console.log("plus " + result.length);
            return result;
        })


    })
        .catch((err) => {
            console.log('There was an error querying contacts', JSON.stringify(err))
        });
}
const updateBankMatch = (result) => {
    bank.length = 0;
    for (i =0 ; i<result.length ;i++){
        bank[i] = result[i].nameBank;
        console.log(bank[i]);
    }
}
const lastMatch = async (userName) => {
    return db.asset.findAll({where:{email:userName}
    }).then((result) => {
        constructionAnomalies = result[0].constructionAnomalies;
        vacationApartment = result[0].vacationApartment;
        NotPurchasedFromContractorEndNoForm4 = result[0].NotPurchasedFromContractorEndNoForm4;
        purchaseInTrust = result[0].purchaseInTrust;
        theRightsSettlementProcessHasNotBeenCompleted = result[0].theRightsSettlementProcessHasNotBeenCompleted;
        buyersReceivers = result[0].buyersReceivers;
        rtmentFromCPR = result[0].rtmentFromCPR;
        apartmentPricePeroccupant = result[0].apartmentPricePeroccupant;
        secondHandApartment = result[0].secondHandApartment;
        privateHouse = result[0].privateHouse;
        SelfBuiltHouse = result[0].SelfBuiltHouse;
        field = result[0].field;
        centerArea = result[0].centerArea;
        northRegionArea = result[0].northRegionArea;
        southernArea = result[0].southernArea;
        requestHeight = parseInt(result[0].valueOfTheConference)-parseInt(result[0].equity);
        //לעדכן במסד
        amountOfEquity = result[0].equity;
        return db.BankSideProperties.findAll({
            where: {
                bankName: {[Op.or]: [bank[0], bank[1], bank[2]]}
                , constructionAnomalies: {[Op.or]: [true, constructionAnomalies]}
                , vacationApartment: {[Op.or]: [vacationApartment, true]}
                , NotPurchasedFromContractorEndNoForm4: {[Op.or]: [NotPurchasedFromContractorEndNoForm4, true]}
                , purchaseInTrust: {[Op.or]: [purchaseInTrust, true]}
                , theRightsSettlementProcessHasNotBeenCompleted: {[Op.or]: [theRightsSettlementProcessHasNotBeenCompleted, true]}
                , buyersReceivers: {[Op.or]: [buyersReceivers, true]}
                , rtmentFromCPR: {[Op.or]: [rtmentFromCPR, true]}
                , apartmentPricePeroccupant: {[Op.or]: [apartmentPricePeroccupant, true]}
                , secondHandApartment: {[Op.or]: [secondHandApartment, true]}
                , privateHouse: {[Op.or]: [privateHouse, true]}
                , SelfBuiltHouse: {[Op.or]: [SelfBuiltHouse, true]}
                , field: {[Op.or]: [field, true]}
                // , centerArea: {[Op.or]: [centerArea, true]}
                // , southernArea: {[Op.or]: [southernArea, true]}
            }
        }).then((result) => {
            console.log("assats " + result.length);
            return result;
        })
            .catch((err) => {
                console.log('There was an error querying contacts', JSON.stringify(err))
            });

    })
        .catch((err) => {
            console.log('There was an error querying contacts', JSON.stringify(err))
        });
}
const getFilesPath = (email) => {
    return db.files.findAll({
        where: {email:email}
    }).then((result) => {
        return result;

    })
        .catch((err) => {
            console.log('There was an error querying contacts', JSON.stringify(err))
        });
}
const updateMatch = (userName) => {
    getFilesPath(userName).then(data => {
        file1 = data[0].file1;
        file2 = data[0].file2;
        file3 = data[0].file3;
        file4 = data[0].file4;
        for (i = 0;i<bank.length;i++){
            db.RequestsInProcess.create({
                email:userName,
                nameBank: bank[i],
                nameCustomer: name,
                requestHeight: requestHeight,
                amountOfEquity: amountOfEquity,
                file1: file1,
                file2: file2,
                file3: file3,
                file4: file4,
                remarks: "",
                applicationProcess:"הבקשה בתהליך"
                // })

            }).then((result) => {

            })
                .catch((err) => {
                    console.log('There was an error querying contacts', JSON.stringify(err))
                });
        }

    })
        .catch((err) => {
            console.log('There was an error querying contacts', JSON.stringify(err))
        });


}
