let readline = require('readline-sync');
let callFunction = require('./mergeBL');
try {
    let a=[];
    let n = readline.question('enter size of an array ');
    for(let i=0;i<n;i++){
    a[i]=readline.question('element is ');
    }
    merge=callFunction.mergeSort(a); //calling merge to sort an unsorted array()
    console.log(merge);
}
catch (err) {
    console.log(err);
}