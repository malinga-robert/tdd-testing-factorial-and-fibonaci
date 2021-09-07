const assert = require('chai').assert;
const factorial = require('../factoriall');

// import computeFactorial from "../factorial.js";


// const computeFactorialResult = factorial.computeFactorial(3);

describe("factorial", () => {
    it("should return 6 as factorial for 3", () => {
        assert.equal(factorial.computeFactorial(3), 6);
    });
    it("should return 24 as factorial for 4", () => {
        assert.equal(factorial.computeFactorial(4), 24);
    });
    it("should return 120 as factorial for 4", () => {
        assert.equal(factorial.computeFactorial(5), 120);
    });
});