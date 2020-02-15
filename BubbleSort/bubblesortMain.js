/******************************************************************************
 *  Execution       :   1. default node         cmd> node bubblesortMain.js
 *                      2. if nodemon installed cmd> nodemon bubblesortMain.js
 *
 *  Purpose         : Bubble Sorting.
 *
 *  @description    : An intege array is given as the input so as to sort the array in ascending order. 
 *                    For example: "[2,1,4,3,6,8,5]" will be "[1,2,3,4,5,6,8]"
 *
 *  @file           : bubblesortMain.js
 *  @overview       : sorting the given integer array. 
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Kiran mayi <kiranmayi.raj29@gmail.com>
 *  @version        : v12.11.1
 *  @since          : 15-02-2020
 ******************************************************************************/

let readline = require('readline-sync');
let callFunction = require('./bubblesortBL');
try {
    let size = readline.question('enter size ');
    let a=[];
    for(let j=0;j<size;j++){
        a[j]=readline.question("enter elements ");
    }
 let bub= callFunction.bubblesort(a); //calling bubblesort()
console.log(bub);
}
catch (err) {
    console.log(err);
}
