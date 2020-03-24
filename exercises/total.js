'use strict';

/*
 * Create a `total` function that takes an array of numbers
 * and return the total
 *
 */

// Your code:
const total = arr => arr.reduce((a,b) => a + b, 0)
// function total(){[1, 2, 3, 4]} ;
// const reducer = (accumulator, currentValue) => accumulator + currentValue; 

//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof total, 'function');
assert.strictEqual(total.length, 1);
assert.deepStrictEqual(total([ 1, 1, 1 ]), 3);
assert.deepStrictEqual(total([ 10, 10, 10 ]), 30);
assert.deepStrictEqual(total([ 24, -10, 10, 0, 0, 100 ]), 124);
// End of tests */
