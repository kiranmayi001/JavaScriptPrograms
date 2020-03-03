/**
 * objectOrientedPrograms/commercialDataProcessing.
 * @module objectOrientedPrograms/commercialDataProcessing
 */
const readLine = require('readline-sync');
const fs =require('fs');
/**
 * @class Customer
*/
class Customer{
    constructor(custName,password,stockObj){
        this.custName = custName;
        this.password = password;
        this.stockObj = [stockObj];
    }
}
/**
 * @class Stock
*/
class Stock{
    constructor(stockName,stockNumber,price){
        this.stockName = stockName;
        this.nstockNumber = stockNumber;
        this.price = price;
    }
}
/**
 * @class CommercialData
*/

class CommercialData{
    constructor(){
        const JSONdataretrive=JSON.parse(fs.readFileSync('CommercialDataStock.json'));
        this.commercialData={customer:[{stock:[]}]};
        this.commercialData = JSONdataretrive;

    }


    /**
     * @module-it will create customer and store into commercialData.json file. 
    */
   createAccount(){
    let custName = readLine.question('Enter Account Holder Name : ');
    let password = readLine.question('Enter The password : ');
    let stockName = readLine.question('Enter Stock Name : ');
    let number = readLine.questionInt('Enter Numbers Of Stock : ');
    let price = readLine.questionInt('Enter price of stock : ');
    let stockObj = new Stock(stockName,stockNumber,price);
    let customerObj = new Customer(custName,password,stockObj);
    this.commercialData.customer.push(JSON.parse(JSON.stringify(customerObj)));
    fs.writeFileSync('CommercialDataStock.json',JSON.stringify(this.commercialData));
}
/**
 * @module-it will check Customer is valid customer or not. 
*/

checkAccount(name,password){
    let isAvailable = false;
    let indexPosition = null;
    for(let i=0;i<this.commercialData.customer.length;i++){
        if(this.commercialData.customer[i].name  == name && this.commercialData.customer[i].password  == password){
            isAvailable = true;
            indexPosition = i;
        }
    }
    let result = {status:isAvailable,position:indexPosition}
   return JSON.stringify(result);

}
/**
 * @module-it will buy the stock of given customer. 
*/

buyStock(indexOfCust){
    console.log(`-------** Welcom ${this.commercialData.customer[indexOfCust].name}..`);
    try{
    let name = readLine.question('Enter the name of Stock : '); 
    let number = readLine.questionInt('Enter Number of stock : ');
    let price = readLine.questionInt('Enter the price of Stock : ');
    let buyStock = new Stock(name,number,price);
    this.commercialData.customer[indexOfCust].stock.push(JSON.parse(JSON.stringify(buyStock)));
    fs.writeFileSync('commercialDataStock.json',JSON.stringify(this.commercialData));
}
catch(err){
    throw err;
}
}
/**
 * @module-it will sell the stock for given customer. 
*/
sellStock(indexOfCust){
    try{
    console.log('Available Stocks');
    for(let n in this.commercialData.customer[indexOfCust].stock){
        console.log(`${n} => ${this.commercialData.customer[indexOfCust].stock[n].name}`);
    }
    let nameStock = readLine.question('Enter name of the Stock for sell : ');
    for(let n in this.commercialData.customer[indexOfCust].stock){
        if(this.commercialData.customer[indexOfCust].stock[n].name == nameStock){
            this.commercialData.customer[indexOfCust].stock.splice(n,1);
        }
    }
    // this.commercialData.customer[indexOfCust].stock.push(JSON.parse(JSON.stringify(buyStock)));
    fs.writeFileSync('commercialData.json',JSON.stringify(this.commercialData));
}
catch(err){
    throw err;
}
}
/**
 * @module-it will print report of customer.  
*/
printReport(indexOfCust){
    console.log(`** Report stock of ${this.commercialData.customer[indexOfCust].name}`);
    for(let n in this.commercialData.customer[indexOfCust].stock){
        console.log(this.commercialData.customer[indexOfCust].stock[n]);
    }
}
}
module.exports = {
Customer,Stock,CommercialData
}

