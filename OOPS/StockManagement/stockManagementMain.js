const readline=require('readline-sync');
const fs=require('fs');
const callFuncla=require('./stockManagementBl');
try{
   
    let sm=new callFuncla.StockManagement();
sm.addnewStock();
sm.stockReport();

}
catch(err){
    throw err;
}