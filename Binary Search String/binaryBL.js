module.exports={
    binary:(a,string)=>{
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

}
}