/******************************************************************************
 *  Execution       :   1. default node         cmd> node primeanagramstackMain.js
 *                      2. if nodemon installed cmd> nodemon primeanagramstackMain.js
 *
 *  Purpose         : Implement Stack using LinkedList to store the prime anagram number in the
 *                    range 0-1000.
 *
 *  @description    : Add the Prime Numbers that are Anagram in the Range of 0 - 1000 in a Stack
 *                    using the Linked List and Print the Anagrams in the Reverse Order.
 *  @file           : stackPrimeAnagramMain.js
 *  @overview       : Implement Stack using LinkedList to store the prime number.
 *  @author         : Kiran Mayi <kiranmayi.raj29@gmail.com>
 *  @version        : v13.1.0
 *  @since          : 24-02-2020
 ******************************************************************************/
const callfunction = require('./primeanagramstackBl')
try {
    let stack = callfunction.getAnagram();
    while (!stack.isEmpty()) {
        console.log(stack.pop());
    }

}
catch (err) {
    console.log(err);
}