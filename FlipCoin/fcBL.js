module.exports={
    flipCoin:(noflips)=>{
        let heads=0;
        let tails=0;
        for(let i=1;i<=noflips;i++){
            if(Math.random()>=0.5){
                heads++;
                 }
            else{
                tails++;
                }
        }
        let h=(heads*100)/noflips;
        let t=(tails*100)/noflips;
        return {h,t};
    
    }





}