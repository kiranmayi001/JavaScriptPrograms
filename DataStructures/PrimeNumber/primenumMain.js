/******************************************************************************
 *  Execution       :   1. default node         cmd> node primenumberMain.js
 *                      2. if nodemon installed cmd> nodemon primenumberMain.js
 *
 *  Purpose         : Implement 2D array to store prime numbers.
 *
 *  @description    : Take a range of 0 - 1000 Numbers and find the Prime numbers in that range.
 *                    Store the prime numbers in a 2D Array, the first dimension represents the
 *                    range 0-100, 100-200, and so on. While the second dimension represents the
 *                    prime numbers in that range.
 *  @file           : primeNumberMain.js
 *  @overview       : Implement 2D array to store prime numbers.
 *  @author         : Kiran Mayi <kiranmayi.raj29@gmail.com>
 *  @version        : v13.1.0
 *  @since          : 24-02-2020
 ******************************************************************************/
const callfunction = require('./primenumberBl');

try {
    let primeNumbers = [];
    primeNumbers = callfunction.getPrimeNumber();
    for (const prime of primeNumbers) {
        console.log(prime+"");
    }
}
catch (err) {
    console.log(err);
}