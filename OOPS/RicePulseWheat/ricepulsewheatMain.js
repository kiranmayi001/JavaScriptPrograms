/******************************************************************************
 *  Execution       :   1. default node         cmd> node ricepulsewheat.js 
                      
 * @description     : Calculating the total price of items in inventory based on their quantity
                      which store in JSON file.  
 *  @file           : ricepulseWheatMain.js
 *  @overview       : calculating the total price of items in inventory based on their quantity
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Kiran Mayi <kiranmayi.raj@29@gmail.com>
 *  @version        : v13.1.0
 *  @since          : 27-02-2020
 ******************************************************************************/
const fs = require('fs');
const readline=require('readline-sync');
const inventoryLib = require('./ricepulsewheatBl');
try {
    let main = () => {
        let shop = new inventoryLib.ManageInventory(); //class called
        shop.calculateInventoryTotal(); // host function called, could use only the host function only .
        while (true) {
            console.log("enter 1 to add rice");
            console.log("enter 2 to add pulses");
            console.log("enter 3 to add wheat");
            console.log("enter 4 to add calculate");
            console.log("enter 5 to exit");
            const choice = readline.question("enter your choice number");

            switch (choice) {
                case 1:
                    shop.fillRice();
                    break;
                case 2:
                    shop.fillPulses();
                    break;
                case 3:
                    shop.fillWheats();
                    break;
                case 4:
                    shop.calculateInventoryTotal()
                    break;
                case 5:
                    process.exit(0);
            }
        }
    }
    main();
} catch (err) {
    throw err;
}