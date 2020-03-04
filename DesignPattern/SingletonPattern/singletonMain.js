/******************************************************************************
 *  Execution       :   1. default node         cmd> node singletonMain.js
 *                      2. if nodemon installed cmd> nodemon singletonMain.js
 *
 *  Purpose         : example of singleton design pattern
 *
 *  @description    : Singleton Design Pattern
 *
 *  @file           : singletonMain.js
 *  @overview       : Singleton design pattern
 *  @module         : module_name This is optional if expeclictly its an npm or local package
 *  @author         : Kiran Mayi<kiranmayi.raj29@@gmail.com>
 *  @version        : 6.13.4
 *  @since          : 04-03-2020
 ******************************************************************************/
const cf=require('./singletonBl');

const obj1 = cf.User();
const obj2 = cf.User();
console.log(obj1);
console.log(obj2);
console.log(obj1 == obj2);


