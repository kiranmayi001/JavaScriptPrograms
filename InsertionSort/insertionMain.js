/******************************************************************************
 *  Execution       :   1. default node         cmd> node insertionMain.js
 *                      2. if nodemon installed cmd> nodemon insetionMain.js
 *
 *  Purpose         : Insertion Sorting.
 *
 *  @description    : An intege array is given as the input so as to sort the array in ascending order. 
 *                    For example: "[kiran,Raju,Mayi]" will be "[kiran,Mayi,Raju]""
 *
 *  @file           : insertiontMain.js
 *  @overview       : sorting the given String array. 
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Kiran mayi <kiranmayi.raj29@gmail.com>
 *  @version        : v12.11.1
 *  @since          : 15-02-2020
 ******************************************************************************/

let readline = require('readline-sync');
let callFunction = require('./insertionBL');
try {
    let size = readline.question('enter size ');
    let a=[];
    for(let j=0;j<size;j++){
        a[j]=readline.question("enter String elements ");
    }
 let insertion= callFunction.insertionsort(a); //calling insertionsort()
console.log(insertion);
}
catch (err) {
    console.log(err);
}
