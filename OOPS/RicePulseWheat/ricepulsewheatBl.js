/**
 * objectOrientedPrograms/ricePlusesWheatsCountTotal.
 * @module objectOrientedPrograms/ricePlusesWheatsCountTotal
 */
const readLine = require('readline-sync');
const fs = require('fs');
/**
 * @class Rice
*/
class Rice{
    constructor(name,weight,price){
        this.name = name;
        this.weight = weight;
        this.price = price;
    }
   
}
/**
 * @class Pulses
*/
class Pulses{
    constructor(name,weight,price){
        this.name = name;
        this.weight = weight;
        this.price = price;
    }
   
}
/**
 * @class Wheats
*/
class Wheats{
    constructor(name,weight,price){
        this.name = name;
        this.weight = weight;
        this.price = price;
    }
    
}
/**
 * @class ManageInventory
*/
class ManageInventory{
    constructor(){
        this.rice = [];
        this.pulses = [];
        this.wheats = [];
        let jsonData = fs.readFileSync('RicePulseWheat.json');
        let inventoryData = JSON.parse(jsonData); //converts the web file to object
        this.inventories = {}; //new object
        // it check array is there or not in object.
        if(Array.isArray(inventoryData.rice)){
            this.inventories.rice = inventoryData.rice; //assigning the rice key array to inventories
        } else {
            // Object.assign(newObject,oldObject) it append new-Object to old-object. 
            this.inventories = Object.assign({rice:[]},this.inventories)
        }
        if(Array.isArray(inventoryData.pulses)){
            this.inventories.pulses = inventoryData.pulses;
        } else {
            this.inventories = Object.assign({pulses:[]},this.inventories) 
        }
        if(Array.isArray(inventoryData.wheats)){
            this.inventories.wheats = inventoryData.wheats;
        } else {
            this.inventories = Object.assign({wheats:[]},this.inventories)
        }
    }
    /**
     * @module-it will insert the RiceData in the RicePulseWheat.json file. 
    */
    fillRice(){
        const name = readLine.question('Enter the Rice Name : ');
        const weight = readLine.questionFloat('Enter the weight of Rice : ');
        const price = readLine.questionFloat('Enter the price of Rice : ');
        const rice = new Rice(name,weight,price);
        this.inventories.rice.push(JSON.parse(JSON.stringify(rice))); //removes the name of the rice and helps to converto string and make it as an object
        fs.writeFileSync('RicePulseWheat.json',JSON.stringify(this.inventories));//returning to he file back
    }
    /**
     * @module-it will insert the PulsesData in the RicePulseWheat.json file. 
    */
    fillPulses(){
        const name = readLine.question('Enter the Name of pulses : ');
        const weight = readLine.questionFloat('Enter the weight of pulses : ');
        const price = readLine.questionFloat('Enter the price of pulses : ');
        const pulses = new Pulses(name,weight,price);
        this.inventories.pulses.push(JSON.parse(JSON.stringify(pulses)));
        fs.writeFileSync('RicePulseWheat.json ',JSON.stringify(this.inventories));
    }
    /**
     * @module-it will insert the WheateData in the RicePulseWheat.json  file. 
    */
    fillWheats(){
        const name = readLine.question('Enter the name of wheat : ');
        const weight = readLine.questionFloat('Enter the weight of wheat :');
        const price = readLine.questionFloat('Enter the price of wheat : ');
        const wheat = new Wheats(name,weight,price);
        this.inventories.wheats.push(JSON.parse(JSON.stringify(wheat)));
        fs.writeFileSync('RicePulseWheat.json ',JSON.stringify(this.inventories));
    }
    /**
     * @module-it will calculate and print each inventories price. 
    */
    calculateInventoryTotal(){
        let riceTotal = 0;
        let plusesTotal = 0;
        let wheatsTotal = 0;
        for(let i=0;i<this.inventories.rice.length;i++){ //array length of rice key 
            riceTotal += this.inventories.rice[i].price;
        }
        for(let i=0;i<this.inventories.pulses.length;i++){
            plusesTotal += this.inventories.pulses[i].price;
        }
        for(let i=0;i<this.inventories.wheats.length;i++){
            wheatsTotal += this.inventories.wheats[i].price;
        }
        console.log(`Total price of Rice = ${riceTotal}`);
        console.log(`Total price of Pluses = ${plusesTotal}`);
        console.log(`Total price of Wheats = ${wheatsTotal}`);
    }
    printUpdate(){
        console.log("------------------RICE----------------------");
        console.log();
        console.log("------------------RICE----------------------");
        console.log("------------------RICE----------------------");
        console.log("------------------RICE----------------------");
        console.log("------------------RICE----------------------");
        console.log("------------------RICE----------------------");
    }
}
module.exports = {
    Rice,Pulses,Wheats,ManageInventory
}