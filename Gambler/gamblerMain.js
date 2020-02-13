const readline = require('readline-sync'); //system input taking seperate input
const callFunction = require('./gamblerBL'); // giving path 
try {
    let stake = readline.question('enter the value of stake');
    let goal = readline.question('enter the value of goal');
    let trials = readline.question('enter the no of trials');
    let game=callFunction.funcGambler(stake,goal,trials); //calling gambler() and assiging funtion to a variable
    console.log(game); // giving function input and getting output here
}
catch (error) {
    console.log(error);
}
