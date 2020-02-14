et readline = require('readline-sync');
let callFunction = require('./anagramBL');
try {
    llet a=[];
    let n = readline.question('enter size of an array ');
    for(var i=0;i<n;i++){
    a[i]=readline.question('element is ');
   
    callFunction.host(a); //calling checkAnagram()
}
catch (err) {
    console.log(err);
}