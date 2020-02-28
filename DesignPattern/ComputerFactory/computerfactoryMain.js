
const readline=require('readline-sync');

const callfun=require('./computerfactoryBl');
try{
    let memory=readline.question("enter the memory data of computer you need: ");
let ram=readline.question("enter the ram of computer you need: ");
let type=readline.question("enter the type of computer you need: ");
    let cf=new callfun.Computer();


    cf.factory(memory,ram,type);
    console.log("type"+":"+type);
    console.log("memory"+":"+memory+" "+"ram"+":"+ram);
}
catch(err){
    throw err;
}