/******************************************************************************
 *  Execution       :   1. default node         cmd> node bankcounterMain.js
 *                      2. if nodemon installed cmd> nodemon bankcounterMain.js
 *
 *  Purpose         : Impelment queue for withdraw and deposit cash.
 *
 *  @description    : Create a Program which creates Banking Cash Counter where people come in 
 *                    to deposit Cash and withdraw Cash. Have an input panel to add people to 
 *                    Queue to either deposit or withdraw money and dequeue the people. Maintain
 *                    the Cash Balance.
 *  @overview       : Impelment queue for withdraw and deposit cash and maintain cash balance.
 *  @author         : Kiran Mayi <kiranmayi.raj29@gmail.com>
 *  @version        : v13.1.0
 *  @since          : 24-02-2020
 ******************************************************************************/

const callfunction = require('./bankcounteBL');
try {
    let getBank = new callfunction.bankCounter();
    getBank.bankCounters();
    getBank.processDepositQueue();
    getBank.processWithdrawQueue();
}
catch (err) {
    console.log(err);
}