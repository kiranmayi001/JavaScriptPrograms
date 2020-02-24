//Node class
class Node {
    // constructor 
    constructor(data) {
        this.data = data;
        this.next = null
    }
}
// Queue class 
class Queue {
    constructor() {
        this.size = 0;
        this.head = null;
    }
    /**
     * @param {number} data - to enqueue the data into queue
     */
    enqueue(data) {
        try {
            let node = new Node(data);
            if (this.head == null) {
                this.head = node;
            }
            else {
                let current = this.head;
                while (current.next) {
                    current = current.next;
                }
                current.next = node;
            }
            this.size++;
        }
        catch (err) {
            console.log(err);
        }
    }
    /**
     * @returns {number} data - top element in the queue
     */
    dequeue() {
        try {
            let data;
            data = this.head.data;
            this.head = this.head.next;
            this.size--;
            return data;
        }
        catch (err) {
            console.log(err);
        }
    }
    /**
     * @returns {boolean} - satck is empty or not
     */
    isEmpty() {
        return this.size == 0;
    }
}
/**
 * @returns {number} primeNumbers - prime number between 0-1000 in a array
 */
getPrimeNum = () => {
    let primeNumbers = [];
    for (let i = 2; i < 1000; i++) {
        if (isPrime(i)) {
            primeNumbers.push(i);
        }
    }
    return primeNumbers;
}
/**
 * @param {number} number - to check it is a prime number or not
 * @returns {boolean} - number is prime or not
 */
isPrime = (number) => {
    try {
        let i = 2;
        while (i <= number / 2) {
            if (number % i == 0)
                return false;
            i++
        }
        return true;
    }
    catch (err) {
        console.log(err);
    }
}

/**
 * queuePrimeAnagramBl.js
 */
module.exports = {
    /**
     * enqueue all the prime anagram number to the queue
     * @returns queue object
     */
    getAnagram: () => {
        try {
            let prime = getPrimeNum();
            let queue = new Queue();
            for (let i = 0; i < prime.length; i++) {
                let ele1 = (prime[i] + "").split("").sort().toString();
                for (let j = 0; j < prime.length; j++) {
                    let ele2 = (prime[j] + "").split("").sort().toString();
                    if (i != j && ele1 == ele2) {

                        queue.enqueue(prime[i]);

                        break;
                    }
                }
            }
            return queue;
        }
        catch (err) {
            console.log(err);
        }
    }
}