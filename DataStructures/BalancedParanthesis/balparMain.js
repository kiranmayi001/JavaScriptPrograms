/******************************************************************************
* Execution : 1. default node cmd> node balparMain.js
* 2. if nodemon installed cmd> nodemon balparMain.js
*
* Purpose : Balanced Pranthesis.
*
* @description : to check if the paranthesis are balanced and return...
*
* @file : balparMain.js
* @overview : checking if  paranthesis is balanced.
* @module : module_name - This is optional if expeclictly its an npm or local package
* @author : Kiran Mayi <kiranmayi.raj29@gmail.com>
* @version : v12.11.1
* @since : 17-02-2020
******************************************************************************/
const readline = require('readline-sync');
const callfunction = require('./BalParBL');
try {
let expression = readline.question("enter the Arthemetic expression")
let result = callfunction.isBalanced(expression);
console.log(result);
} catch (err) {
throw err;
}