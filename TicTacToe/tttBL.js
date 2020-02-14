/*****************************************************************************
 *  Execution       :   1. default node         cmd> node anagramMain.js
 *                      2. if nodemon installed cmd> nodemon anagramMain.js
 *
 *  Purpose         : Anagram Detection.
 *
 *  @description    : index of a 2 dimention array is given as an input to mark the "x" and a "o"
 *                    For Example: lets say "i" and "j" is 0 and 3 respectively it will mark "x" or "o" according to the turn. 
 *            
 *
 *  @file           : tttMain.js
 *  @overview       :It is a Tic Tac toe game 
 * 
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Kiran Mayi <kiranmayi.raj29@gmail.com>
 *  @version        : v`1.11.1
 *  @since          : 14-02-2020
 ******************************************************************************/

let readline = require('readline-sync');
let callFunction = require('./anagramBL');
try {
    let firstString = readline.question('enter first string ');
    let secondString = readline.question('enter second string ');
    callFunction.checkAnagram(firstString, secondString); //calling checkAnagram()
}
catch (err) {
    console.log(err);
}
