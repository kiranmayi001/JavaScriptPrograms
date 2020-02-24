/**
 * primeNumberBl.js
 */
module.exports = {
    getPrimeAnagram: () => {
        let primeNumbers = getPrimeNumber();
        for (const prime of primeNumbers) {
            getAnagram(prime);
        }
    }
}
/**
 * @param {number} prime - 2D array of numbers
 */
getAnagram = (prime) => {
    let anagram = [prime[0]];
    let nonanagram = [prime[0]];
    for (let i = 1; i < prime.length; i++) {
        let ele1 = (prime[i] + "").split("").sort().toString();
        let isAnagram = true;
        for (let j = 1; j < prime.length; j++) {
            let ele2 = (prime[j] + "").split("").sort().toString();
            if (i != j && ele1 == ele2) {
                anagram.push(prime[i]);
                isAnagram = false;
            }
        }
        if (isAnagram)
            nonanagram.push(prime[i]);
    }

    console.log("anagram " + anagram);
    console.log("nonanagram " + nonanagram);
}
/**
* @returns primeNumbers - 2D array of prime number between 0-1000
*/
getPrimeNumber = () => {
    try {
        let primeNumbers = [];
        let max = 100;
        let min = 2;
        let range = [];
        for (let i = min; i <= max && i <= 1000; i++) {
            if (i == min)
                range.push(min + "-" + max)

            if (i == max) {
                min = max + 1;
                max += 100;
                primeNumbers.push(range);
                range = [];
            }
            if (isPrime(i))
                range.push(i);
        }
        return primeNumbers;
    }
    catch (err) {
        console.log(err);
    }
}
/**
 * @param {number} number - to check it is a prime number or not
 * @returns {boolean} - true or false
 */
isPrime = (number) => {
    try {
        let i = 2;
        while (i <= number / 2) {
            if (number % i == 0)
                return false;
            i++;
        }
        return true;
    }
    catch (err) {
        console.log(err);
    }
}