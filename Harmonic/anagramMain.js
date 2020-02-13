          const readline = require('readline-sync');
const callFunction = require('./anagramBL');
try {
    let String1 = readline.question('enter first string: ');
    let String2 = readline.question('enter second string: ');
    let Ana=callFunction.checkAnagram(String1,String2); //calling checkAnagram() and assigning it to a variable
    console.log(Ana);
}
catch (error) {
    console.log(error);
}
        
    
