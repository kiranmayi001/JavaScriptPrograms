/**
 * primeNumberBl.js
 */
module.exports = {
    /**
     * @returns primeNumbers - 2D array of prime number between 0-1000
     */
    getPrimeNumber: () => {
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
            i++
        }
        return true;
    }
    catch (err) {
        console.log(err);
    }
}