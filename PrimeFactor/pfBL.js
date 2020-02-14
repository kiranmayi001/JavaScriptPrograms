module.exports={
    isFactor:(N)=>{
let count=0;
let a=[];
let n=N;
for(let i=2;i<=N;i++)
    {
       while(n%i==0)
       {
        //count++;
        n=n/i;
        a[count++]=i;
       }

   }
if(n==1)
    {
     return a;
    }

    }


}