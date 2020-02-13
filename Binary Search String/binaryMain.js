const readline = require('readline-sync'); //system input taking seperate input
const callFunction = require('./binaryBL'); // giving path 
try {
    let a=[];
    let size = readline.question('enter size of an array ');
    for(var i=0;i<size;i++){
     a[i]=readline.question('element is ');
    }
    let string=readline.question('enter string to check in array  ');
   
    let bin=callFunction.binary(a,string); //calling binaryfunc() and assiging funtion to a variable
    console.log(bin); // giving function input and getting output here
}
catch (error) {
    console.log(error);
}
