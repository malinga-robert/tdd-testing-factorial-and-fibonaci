/*
Group members
KAYEGI PRISCILLA
MALINGA ROBERT 
*/

const assert = require('chai').assert;
const fibonacci = require('../fibonaccii');

describe('fibonacci',() =>{
    it("should return 2 as the fibonacci for 3", () => {
        assert.equal(fibonacci.computeFibonacci(3), 2);
    });
    it("should return 3 as the fibonacci for 4", () => {
        assert.equal(fibonacci.computeFibonacci(4), 3);
    });
    it("should return 5 as the fibonacci for 5", () => {
        assert.equal(fibonacci.computeFibonacci(5), 5);
    });
});