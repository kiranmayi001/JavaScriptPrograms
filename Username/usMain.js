let readline = require('readline-sync');
let callFunction = require('./usBL');
try {
    let str = readline.question('enter first string ');
    let checkstr=callFunction.us(str); //calling us()) if the length of string is satified
    console.log(checkstr);
}
catch (err) {
    console.log(err);
}