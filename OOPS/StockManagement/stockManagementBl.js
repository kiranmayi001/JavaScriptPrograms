
const readline=require('readline-sync');
const fs=require('fs');


class Stock{
    constructor(name,numberofStock,price){
        this.name=name;
        this.numberofStock=numberofStock;
        this.price=price;
    }
}
class StockManagement{
    constructor(){
        this.stockDataObj={stock:[]};
        let JSONread=fs.readFileSync('StockManagement.json'); // just reads the json file 
        let JSONretrive=JSON.parse(JSONread); //retrive as obj from a json string
        this.stockDataobj.stock=JSONretrive.stock;// pulling array of Stock from Json file and assigning it into the obj
    }
    addnewStock(){
        try{
let name=readline.question("Enter the name of the stock : ");
let numberofStock=readline.question("Enter the number of the stocks presented : ");
let price=readline.question("Enter the price of that stock : ");
let new_stock=new Stock(name,numberofStock,price);
this.stockDataObj.stock.push(JSON.parse(JSON.stringify(new_stock)));
fs.writeFileSync('StockManagement.json',JSON.stringify(this.stockDataObj));
        }
        catch(err){
            throw err;
        }
    }
    stockReport(){
   
for(let i=0;i<this.stockDataobj.stock.length;i++){
  var total_stock_price= total_stock_price+this.stockDataObj[i].price;
}
console.log(total_stock_price);
    }
}
module.exports={
    Stock,StockManagement
}