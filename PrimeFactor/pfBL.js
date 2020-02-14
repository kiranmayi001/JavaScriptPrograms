module.exports={
    isFactor:(N)=>{
let count=0;
let a=[];
let n=N;
for(let i=2;i<=N;i++){


    while(n%i==0){
        count++;
        n=n/i;
        for(let j=0;j<count;j++){
            a[j]=i;
        }
    }

}

return a;


    }




}