/******************************************************************************
 *  Execution       :   1. default node         cmd> node stockManagementMain.js 
                      
 * @description     :   Write a program to read in Stock Names, Number of Share, Share Price.
                       Print a Stock Report with total value of each Stock and the total value of Stock.
 *  @file           :  stockManagementMain.js
 *  @overview       :  Print a Stock Report with total value of each Stock and the total value of Stock.
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Kiran Mayi <kiranmayi.raj29@gmail.com>
 *  @version        : v13.1.0
 *  @since          : 28-02-2020
 ******************************************************************************/







const readline = require('readline-sync');
const fs = require('fs');
const callFuncla = require('./stockManagementBl');
try {

    let sm = new callFuncla.StockManagement();
    sm.addnewStock();
    sm.stockReport();

}
catch (err) {
    throw err;
}