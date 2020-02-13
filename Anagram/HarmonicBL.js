
module.exports={
    Harmonic:(inputNumber)=> {
        let sumofharmonic=0.0; // decimal
        for(let i=1;i<=inputNumber;i++){
            sumofharmonic=sumofharmonic+(1/i);  
        }
        return sumofharmonic;
    }

}