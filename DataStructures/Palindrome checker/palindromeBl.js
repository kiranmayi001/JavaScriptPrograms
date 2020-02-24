class DeQueue {
    // Array is used to implement a Queue 
    constructor() {
        this.deQueue = [];
    }
    /**
    * @param {String} character - add in the rear of deQueue 
    */
    enqueueRear(character) {
        this.deQueue.push(character);
    }
    /**
    * @param {String} character - add in the front of deQueue 
    */
    enqueueFront(character) {
        this.deQueue.unshift(character);
    }
    /**
    * @returns {string} - remove element present in the front of the deQueue
    */
    dequeueFront() {
        return this.deQueue.shift();
    }
    /**
    * @returns {string} - remove element present in the end of the deQueue
    */
    dequeueRear() {
        return this.deQueue.pop();
    }
    /**
    *@return {boolean} - true if the deQueue is empty.
    */
    isEmpty() {
        return this.deQueue.length == 0;
    }
}

/**
* @module palindromeCheckerBl.js
*/
module.exports = {
    DeQueue
}