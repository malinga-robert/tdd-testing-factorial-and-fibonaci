
const assert = require('chai').assert;
const fibonacci = require('../fibonacci');
const getFibonacci = require('../fibonacci').getNthFibonacci;
//results

describe('this function should calculate the fibonacci of a number', function(){
    it('should return 0 as the 1st Fibonacci number', function (){
     let result = fibonacci.getFibonacci();
    assert.equal(result, 0);
   }),

    it('should return 1 as the 1st Fibonacci number', function () {
        let result = fibonacci.getFirstFibonacci();
        assert.equal(result, 1);
    }),
    
    it('should return 1 as the 2nd Fibonacci number', function () {
        let result = fibonacci.getSecondFibonacci();
        assert.equal(result, 1);
    }),
    it('should return 2 as the 3rd Fibonacci number', function () {
        let result = fibonacci.getThirdFibonacci();
        assert.equal(result, 2);
    }),
    
    it('should return 3 as the 4th Fibonacci number', function () {
        let result = fibonacci.getFourthFibonacci();
        assert.equal(result, 3);
    }),

    it('should return 5 as the 5th Fibonacci number', function () {
        let result = fibonacci.getFifthFibonacci();
        assert.equal(result, 5);
    }),

   it('should return 8 as the 6th Fibonacci number', function () {
        let result = fibonacci.getSixthFibonacci();
        assert.equal(result, 8);
    }),

    it('should return 13 as the 7th Fibonacci number', function () {
        let result = fibonacci.getSeventhFibonacci();
        assert.equal(result, 13);
    }),

    it('should return 337 as the 12th Fibonacci number', function () {
        let result = fibonacci.getTwelvethFibonacci();
        assert.equal(result, 337);
    })

});
