const readline = require('readline-sync');

class Queue {
    // Array is used to implement a Queue 
    constructor() {
        this.queue = [];
    }
    /**
     * @param {String} Name - add in the queue
     */
    enqueue(Name) {

        this.queue.push(Name);
    }
    /**
     * @returns {string} - person present in the front of the queue
     */
    dequeue() {
        return this.queue.shift();
    }
    /**
     *@return {boolean} - true if the queue is empty.
     */
    isEmpty() {
        return this.queue.length == 0;
    }
}
//bankCounter class
class bankCounter {
    constructor() {
        this.balance = 500000;
        this.withdraw = new Queue();
        this.deposit = new Queue();
    }
    /**
    * call addToQueue() if a new person comes to bank
    */
    bankCounters() {
        try {
            let choice = true;
            do {
                let getChoice = readline.question('Press y if u want to add people in the queue ')
                if (getChoice == "y")
                    this.addToQueue();
                else if (getChoice == "n")
                    choice = false;
                else {
                    console.log("Wrong input");
                }
            } while (choice)
        }
        catch (err) {
            console.log(err);
        }
    }
    /**
    * add the person to either deposit queue or withdraw queue
    */
    addToQueue() {
        try {
            let name = readline.question("Enter the name of that person ");
            let queueChoice;
            do {
                queueChoice = readline.questionInt("Enter 1 for withdraw , 0 for deposit ");
                if (queueChoice == 1) {
                    this.withdraw.enqueue(name);
                    return;
                }
                else if (queueChoice == 0) {
                    this.deposit.enqueue(name);
                    return;
                }
                else
                    console.log("Wrong input");
            } while (queueChoice != 1 || queueChoice != 0)
        }
        catch (err) {
            console.log(err);
        }
    }
    /**
    * add the deposit amount of each person to banlbalance
    */
    processDepositQueue() {
        try {
            while (!this.deposit.isEmpty()) {
                let name = this.deposit.dequeue();
                let amount = readline.questionInt(name + " enter the amount u want to deposit ");
                this.balance += amount;
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    /**
    * deduct the withdraw amount of each person from bankbalnce if bankbalance is sufficient
    */
    processWithdrawQueue() {
        try {
            while (!this.withdraw.isEmpty()) {
                let name = this.withdraw.dequeue();
                let amount = readline.questionInt(name + " enter the amount u want to withdraw ");
                if (amount > this.balance - 100000)
                    console.log("Sorry insufficient balance in bank");

                else
                    this.balance -= amount;
            }
        }
        catch (err) {
            console.log(err);
        }
    }
}
/**
* @module balancedParenthesesBl.js
*/
module.exports = {
    bankCounter
}