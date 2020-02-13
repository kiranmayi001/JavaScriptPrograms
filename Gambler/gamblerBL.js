module.exports={
    funcGambler:(stake,goal,trials)=>{
        let bet=0;
        let wins=0;
        var loss;
        let wincount=0;
        for(let i=0;i<trials;i++){
            var temp=stake;
            while((temp>0) && (temp<goal)){
                bet++;
                var rand=Math.random();
                if(rand<=0.5){
                                  temp--;
                }
                else{
                temp++;
                }
            }
            console.log(temp);
            if(temp==goal){
                wins++;
            }
        }
        return {wins,bet};

    
    
    }
}