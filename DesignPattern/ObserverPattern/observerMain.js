/******************************************************************************
 *  Execution       :   1. default node         cmd> node observerMain.js
 *                      2. if nodemon installed cmd> nodemon observerMain.js
 *
 *  Purpose         : example of Observer design pattern
 *
 *  @description    : Observer Design Pattern
 *
 *  @file           : observerMain.js
 *  @overview       : Observer design pattern
 *  @module         : module_name This is optional if expeclictly its an npm or local package
 *  @author         : Kiran Mayi<kiranmayi.raj29@gmail.com>
 *  @version        : 6.13.4
 *  @since          : 07-02-2020
 ******************************************************************************/
const callfunction = require("./observerBl");
try {
    let main = () => {
        let observer = new callfunction.Click();
        observer.subscribersAdd("Kiran");
        observer.subscribersAdd("Gowri");
        observer.subscribersAdd("Karan");
        observer.subscriberDelete("Gowri");
        observer.printNotified();

    };
    main();
} catch (err) {
    throw err;
}