/******************************************************************************
 *  Execution       :   1. default node         cmd> node primeanagramMain.js
 *                      2. if nodemon installed cmd> nodemon primeanagramMain.js
 *
 *  Purpose         : Implement 2D array to the numbers that are Anagram and numbers that are not Anagram.
 *
 *  @description    : store only the numbers in the range that are Anagrams in 2D array. For e.g.
 *                    17 and 71 are both Prime and Anagrams in the 0 to 1000 range.Further store
 *                    in a 2D Array the numbers that are Anagram and numbers that are not Anagram.
 *  @file           : primeAnagramMain.js
 *  @overview       : Implement 2D array to the numbers that are Anagram and numbers that are not Anagram.
 *  @author         : Kiran Mayi<kiranmayi.raj29@gmail.com>
 *  @version        : v13.1.0
 *  @since          : 21-02-2020
 ******************************************************************************/
const callfunction = require('./primeanagramBl');

try {
    callfunction.getPrimeAnagram();
}
catch (err) {
    console.log(err);
}