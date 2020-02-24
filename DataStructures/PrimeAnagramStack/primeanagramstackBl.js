//Node class
class Node {
    // constructor 
    constructor(data) {
        this.data = data;
        this.next = null
    }
}
// Stack class 
class Stack {
    constructor() {
        this.size = 0;
        this.head = null;
    }
    /**
     * @param {number} data - to push the data into stack
     */
    push(data) {
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
     * @returns {number} data - top element in the stack
     */
    pop() {
        try {
            let data;
            if (this.head.next == null) {
                data = this.head.data;
                this.head = null;
            }
            else {
                let current = this.head;
                let prev = current;
                while (current.next) {
                    prev = current;
                    current = current.next;
                }
                data = current.data;
                prev.next = null;
            }
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
 * stackPrimeAnagramBl.js
 */
module.exports = {
    /**
     * push all the prime anagram number to the stack
     * @returns stack object
     */
    getAnagram: () => {
        try {
            let prime = getPrimeNum();
            let stack = new Stack();

            for (let i = 0; i < prime.length; i++) {
                let ele1 = (prime[i] + "").split("").sort().toString();
                for (let j = 0; j < prime.length; j++) {
                    let ele2 = (prime[j] + "").split("").sort().toString();
                    if (i != j && ele1 == ele2) {

                        stack.push(prime[i]);

                        break;
                    }
                }
            }
            return stack;
        }
        catch (err) {
            console.log(err);
        }
    }
}