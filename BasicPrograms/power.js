/**
* @module powerof
*/
/**
* valdate the sum powerof()
* @param {number} number -ieratte from 1 
* @return {number} product -multiply by 2
*/

module.exports = {
    powerof: (number) => {
        let product = 1;
        let undefined = 0;
        if (number >= 0 && number < 31) {
            for (let i = 1; i <= number; i++) {
                product = product * 2;
            }
            return product;
        }
        else {
            return undefined;
        }

    }
}