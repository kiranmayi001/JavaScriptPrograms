const readline = require('readline-sync'); //system input taking seperate input
const callFunction = require('./binaryBL'); // giving path 
try {
   
   let infile=callFunction.myfile();  
   console.log("input file:",infile);
   let string=readline.question("Enter the string to check: ");
   let bine=callFunction.binary(string,infile); //calling binaryfunc() and assiging funtion to a variable
    console.log(bine); // giving function input and getting output here
}
catch (err) {
    console.log(err);
}
