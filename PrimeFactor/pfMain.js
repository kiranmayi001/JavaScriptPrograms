/******************************************************************************
 *  Execution       :   1. default node         cmd> node pfMain.js
 *                      2. if nodemon installed cmd> nodemon pfMain.js
 *
 *  Purpose         : Prime Factor.
 *
 *  @description    : To find the factors whih are prime to a given Number.
 *                    For example, 6' gives 2 and 3 as prime factors...
 *
 *  @file           : pfMain.js
 *  @overview       : find all the prime factors og given Number. 
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Kiran Mayi <kiranmayi.raj29@gmail.com>
 *  @version        : v12.11.1
 *  @since          : 14-02-2020
 ******************************************************************************/

let readline = require('readline-sync');
let callFunction = require('./pfBL');
try {
    let N = readline.question('enter num');
    
    f=callFunction.isFactor(N); //calling isFactor()
    console.log(f);
}
catch (err) {
    console.log(err);
}