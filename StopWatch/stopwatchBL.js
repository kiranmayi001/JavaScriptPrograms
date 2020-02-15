let readline = require('readline-sync');
//let status =0;
//var time=0;
module.exports={
 nettime:()=>{
    let s=start();
    let st=stop();
    let lapstime=st-s;
    return lapstime;
}
}
function start(){
    console.log("Press any key to start");
    let startkey=readline.question();
    let starttime=timer();
    return starttime;


}
function stop(){
    console.log("Press any key to stop");
    let startkey=readline.question();
    let stoptime=timer();
    return stoptime;
}

function timer(){
let now=new Date().getTime();
 return now;
}
