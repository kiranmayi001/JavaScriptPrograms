/******************************************************************************
 *  Execution       :   1. default node         cmd> node primeanagramquMain.js
 *                      2. if nodemon installed cmd> nodemon primeanagramquMain.js
 *
 *  Purpose         : Implement Queue using LinkedList to store the prime anagram number in the
 *                    range 0-1000.
 *
 *  @description    : Add the Prime Numbers that are Anagram in the Range of 0 - 1000 in a queue
 *                    using the Linked List and Print the Anagrams in the Reverse Order.
 *  @file           : queuePrimeAnagramMain.js
 *  @overview       : Implement Queue using LinkedList to store the prime number.
 *  @author         : Kiran Mayi <kiranmayi.raj29@gmail.com>
 *  @version        : v13.1.0
 *  @since          : 24-02-2020
 ******************************************************************************/
const callfunction = require('./prime anagramquBl');
try {
    let queue = callfunction.getAnagram();
    while (!queue.isEmpty()) {
        console.log(queue.dequeue());
    }
}
catch (err) {
    console.log(err);
}