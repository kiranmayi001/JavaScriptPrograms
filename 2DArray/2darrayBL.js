const readline=require('readline-sync');
module.exports={
    array:(row,col)=>{
        let array=[[]]
        for (let i = 0; i < 3; i++) { 
    array[i] =[[]]; 
    
    }
      
    // Loop to initilize 2D array elements. 
    for (let i = 0; i < 3; i++) { 
        for (let j = 0; j < 3; j++) { 
            ele=readline.question('enter element into array')
             array[i][j] = ele; 
      
    }
    }
    return array;
}
}