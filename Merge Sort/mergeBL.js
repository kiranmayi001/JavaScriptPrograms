var a=[10,13,6,2,11,7];

var low =0;
var high =a.length-1;
var mid;
function host(a) {
if(a.length == 1){
console.log(a);
return a;
}
else{
bla=mergesort(a,low,high);
console.log(bla);
return mergesort(a,low,high); //will returned a sorted array or list if length of the list is >1
//function mergesort() is being called

}
}
function mergesort(a,low,high) {
if (a.length==1){
console.log(a);
return a;

}
else