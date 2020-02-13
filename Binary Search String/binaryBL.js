module.exports={
    binary:(string,f)=>{
var str=f;
var conv_arr=str.split(" ");
var a=conv_arr.sort();

let high=a.length-1;
let low=0;
let mid=0;
while(low<=high){
    mid=parseInt((high+low)/2);
         if(a[mid]==string){
             return true;
                      }
                      else if(string>a[mid]){
                          low=mid+1;
                      }
            else{
                high=mid-1;
            }
}
return false;
},



myfile:() => {
const fs = require('fs');
  
// Write data in 'Output.txt' . 
var f=fs.readFileSync("joey.txt",'utf-8'); 
return f;
}
}



