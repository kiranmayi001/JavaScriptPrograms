/**
* @module leapyear
*/
    /**
    * valdate the lenght of array and call the mergeSort()
    * @param {year} number - Original unsorted Array
    * @return {true or false} boolean -sorted Array
    */




module.exports = {

    isLeap: (year) => {
        if (year % 4 == 0) {
            return true;
        }
        else if (year % 400 == 0 && year % 100 != 0) {
            return true;
        }
        else {
            return false;
        }
    }
}
