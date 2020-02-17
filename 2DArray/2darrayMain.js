
/******************************************************************************
 *  Execution       :   1. default node         cmd> node anagramMain.js
 *                      2. if nodemon installed cmd> nodemon anagramMain.js
 *
 *  Purpose         : Anagram Detection.
 *
 *  @description    : One string is an anagram of another if the second is simply a rearrangement of the first. 
 *                    For example, 'heart' and 'earth' are anagrams...
 *
 *  @file           : anagramMain.js
 *  @overview       : find the anagram og given String. 
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Susheel Pal <sushilk497@gmail.com>
 *  @version        : 1.0
 *  @since          : 28-12-2019
 ******************************************************************************/

let readline = require('readline-sync');
let callFunction = require('./2darrayBL');
try {
    let row=readline.question('enter the size of the row');
    let col=readline.question('enter size of the column');
 
   
    e=callFunction.array(row,col); //calling array()
console.log(e);
}
catch (err) {
    console.log(err);
}
