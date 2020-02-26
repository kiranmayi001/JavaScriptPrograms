/**
* @module leapyear
*/
    /**
    * valdate the sum of harmonic()
    * @param {number} number -ieratte from 1
    * @return {number} sum -the resultant addition
    */




module.exports = {
    harmonic: (number) => {
        var count = 1;
        var sum = 0.0;
        while (count <= number) {
            sum = sum + (1 / count);
            count++;
        }
        return sum;
    }
}