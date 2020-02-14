/******************************************************************************
 *  Execution       :   1. default node         cmd> node p2Main.js
 *                      2. if nodemon installed cmd> nodemon p2Main.js
 *
 *  Purpose         : Largest power 2.
 *
 *  @description    : Number is given and repeatedly multiplied by 2 for power.
 *                    For example, '2 powen 3' is 8...
 *
 *  @file           : p2Main.js
 *  @overview       : find the largest power of 2 og given Number. 
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Kiran Mayi <kiranmayi.raj29@gmail.com>
 *  @version        : v12.11.1
 *  @since          : 14-02-2020
 ******************************************************************************/

let readline = require('readline-sync');
let callFunction = require('./p2BL');
try {
    let N = readline.question('enter number ');
   
    power=callFunction.largestPower(N); //calling largestPower()
    console.log(power);
}
catch (err) {
    console.log(err);
}
