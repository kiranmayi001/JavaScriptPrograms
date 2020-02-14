/******************************************************************************
 *  Execution       :   1. default node         cmd> node fcMain.js
 *                      2. if nodemon installed cmd> nodemon fcMain.js
 *
 *  Purpose         : FlipCoin Detection.
 *
 *  @description    : Number of times the coin has to flip is given and checking the probaility percentage of heads and tails .
 *                    
 *
 *  @file           : fcMain.js
 *  @overview       : find the Percentage og given Head and Tails in given number of flips. 
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Kiran Mayi <kiranmayi.raj29@gmail.com>
 *  @version        : /******************************************************************************
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
 *  @version        : v12.11.1
 *  @since          : 14-02-2020
 ******************************************************************************/







let readline = require('readline-sync');
let callFunction = require('./fcBL');
try {
    let noflips = readline.question('enter number of flips ');
    let f=callFunction.flipCoin(noflips); //calling flipCoin()
    console.log(f);
}
catch (err) {
    console.log(err);
}