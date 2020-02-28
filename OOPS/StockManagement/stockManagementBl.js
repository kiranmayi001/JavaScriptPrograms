
/**
 * objectOrientedPrograms/stockAccountManagementBL.
 * @module objectOrientedPrograms/stockAccountManagementBL.
 */



const readline = require('readline-sync');
const fs = require('fs');

/**
 * @module Stock - this stock class has the following property - stock name, number of stock and stock price
 */
class Stock {
    constructor(name, numberofStock, price) {
        this.name = name;
        this.numberofStock = numberofStock;
        this.price = price;
    }
}
/**
 * @module StockManagement - this StockManagement class will work on the properties of stock class and have methods like
 *                           insertStock(),stockReport() 
 */
class StockManagement {
    constructor() {
        this.stockDataObj = { stock: [] };
        let JSONread = fs.readFileSync('StockManagement.json'); // just reads the json file 
        let JSONretrive = JSON.parse(JSONread); //retrive as obj from a json string
        this.stockDataObj.stock = JSONretrive.stock;// pulling array of Stock from Json file and assigning it into the obj
    }
    /**
     * @module addnewStock() - this will add the stock object in the stockManagement.json file
     */
    addnewStock() {
        try {
            let name = readline.question("Enter the name of the stock : ");
            let numberofStock = readline.questionInt("Enter the number of the stocks presented : ");
            let price = readline.questionInt("Enter the price of that stock : ");
            let new_stock = new Stock(name, numberofStock, price);
            this.stockDataObj.stock.push(JSON.parse(JSON.stringify(new_stock)));
            fs.writeFileSync('StockManagement.json', JSON.stringify(this.stockDataObj));
        }
        catch (err) {
            throw err;
        }
    }
    /**
     * @module stockReport() - calculate the stock value based on stock number. 
     */
    stockReport() {
        var total_stock_price = 0;
        for (let i = 0; i < this.stockDataObj.stock.length; i++) {
            parseInt(total_stock_price = parseInt(total_stock_price + this.stockDataObj.stock[i].price));
        }
        console.log(total_stock_price);
    }
}
module.exports = {
    Stock, StockManagement
}