/******************************************************************************
 *  Execution       :   1. default node         cmd> node commercialdatastockMain.js 
                      
 * @description     :   StockAccount.java implements a data type that might be used by a financial institution 
                        to keep track of customer information. The StockAccount class implements following methods
 *  @file           :  commercialDataStockMain.js
 *  @overview       :  Print a Stock Report with total value of each Stock and the total value of Stock.
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Kiran Mayi <kiranmayi.raj29@gmail.com>
 *  @version        : v13.1.0
 *  @since          : 2-03-2020
 ******************************************************************************/

const comData = require('./commercialdatastockBL');
const readLine = require('readline-sync');

try {
    let CDP = new comData.CommercialData();
    console.log("________HELLO WELCOME_________");
    let userName = readLine.question('Enter Username = ');
    let password = readLine.question('Enter the Password = ');
    let result = CDP.checkAccount(userName, password);
    if (result != -1) {
        console.log('Successfully Logged In');

        CDP.printReport(result);
        let access = true;
        while (access) {
            console.log('1 => for Buy Stock');
            console.log('2 => for Sell Stock');
            console.log('3 => for Print Stock');
            console.log('4 => LOGOUT');
            choice = readLine.questionInt('Enter Your Choice ');
            switch (choice) {
                case 1:
                    CDP.buyStock(result);
                    break;
                case 2:
                    CDP.sellStock(result);
                    break;
                case 3:
                    CDP.printReport(result);
                    break;
                case 4:
                    access = false;
                    break;
            }
        }
    }
    else {
        console.log('Credentials is wrong. Enter again.');
    }
}
catch (err) {
    console.log(err);
}