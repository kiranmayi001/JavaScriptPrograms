module.exports={
    isLeap:(n)=>{
        if(n%4 ==0){
            let l="leap"
            return l;
    
        }
        else if(n%400==0 && n%100!=0){
            l="leap";
            return l;
        }
        else
        {
            l="Not leap"
            return l;
        }
    }
    
    }
    