/******************************************************************************
 *  Execution       :   1. default node         cmd> node palindromeMain.js
 *                      2. if nodemon installed cmd> nodemon palindromeMain.js
 *
 *  Purpose         : Impelment dequeue to check a string is palindrom or not.
 *
 *  @description    : A palindrome is a string that reads the same forward and backward, forexample,
 *                    radar, toot, and madam. We would like to construct an algorithm to input a
 *                    string of characters and check whether it is a palindrome.
 *  @file           : palindromeCheckerMain.js
 *  @overview       : Impelment dequeue. 
 *  @module         : readline-sync
 *  @author         : Kiran Mayi <kiranmayi.raj29@gmail.com>
 *  @version        : v13.1.0
 *  @since          : 24-02-2020
 ******************************************************************************/
const readline = require('readline-sync');
const callfunction = require('./palindromeCheckerBl');

try {
    let string = readline.question('Enter a string ');
    let deque = new callfunction.DeQueue();
    for (let i = 0; i < string.length; i++) {
        deque.enqueueRear(string[i]);
    }
    let newStr = "";
    while (!deque.isEmpty()) {
        newStr += deque.dequeueRear();

    }
    if (string == newStr)
        console.log("Palindrom String");
    else
        console.log("Not Palindrom String");
}
catch (err) {
    console.log(err);
}