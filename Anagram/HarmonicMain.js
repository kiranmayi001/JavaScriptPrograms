const readline = require('readline-sync'); //system input taking seperate input
const callFunction = require('./HarmonicBL'); // giving path 
try {
    let inputNumber = readline.question('enter our input Number ');
    let har=callFunction.Harmonic(inputNumber); //calling Harmonic() and assiging funtion to a variable
    console.log(har); // giving function input and getting output here
}
catch (error) {
    console.log(error);
}