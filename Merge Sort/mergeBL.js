module.exports={
  mergeSort:(a)=>{
    if(a.length<2)
    return a;
let mid=Math.floor(a.length/2);
let left=a.slice(0,mid);
let right=a.slice(mid,a.length);
return merge(mergeSort(left),mergeSort(right));
},
merge:(left,right)=>{
let resultarr=[];
while(left.length && right.length){
  if(left[0]<right[0]){
    resultarr.push(left.shift());
  }
  else {
    resultarr.push(right.shift());
  }
}
while(left.length)
resultarr.push(left.shift());
while(right.length)
resultarr.push(right.shift());
return resultarr;
}
}
