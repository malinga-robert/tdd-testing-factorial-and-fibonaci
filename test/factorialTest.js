
const assert = require('chai').assert;
import computeFactorial from "../factorial.js";
// import {assert} from "chai";

describe("factorial", ()=>{
    it("should return 6 as factorial for 3", ()=>{
        assert.equal(computeFactorial(3), 6);
    });
    it("should return 24 as factorial for 4", ()=>{
        assert.equal(computeFactorial(4), 24);
    });
    it("should return undefined as factorial for -4", ()=>{
        assert.equal(computeFactorial(-6), 'undefined');
    });
});










// const assert = require('chai').assert;
// import fac from "../app.js";

// describe("factorial", ()=>{
//     it("should return 6 as factorial for 3", ()=>{
//         assert.equal(fac(3), 6);
//     });
//     it("should return 24 as factorial for 4", ()=>{
//         assert.equal(fac(4), 24);
//     });
//     it("should return undefined as factorial for -4", ()=>{
//         assert.equal(fac(-6), 'undefined');
//         return false;
//     });
    
// });