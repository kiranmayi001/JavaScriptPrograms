



/******************************************************************************
 *  Execution       :   1. default node         cmd> node leapMain.js
 *                      2. if nodemon installed cmd> nodemon leapMain.js
 *
 *  Purpose         : Leap Year Detection.
 *
 *  @description    : the input is the year and checking if its a leap or a not leap.
 *                    
 *
 *  @file           : leapMain.js
 *  @overview       : find if Leap year og given Year. 
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Kiran Mayi <kiranmayi.raj29@gmail.com>
 *  @version        : 
 *  @since          : 14-2-2020
 ******************************************************************************/

let readline = require('readline-sync');
let callFunction = require('./leapBL');
try {
    let y = readline.question('enter year ');
    
    year=callFunction.isLeap(y); //calling isLeap()
    console.log(year);
}
catch (err) {
    console.log(err);
}

