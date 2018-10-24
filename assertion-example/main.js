var assert = require('assert');

function add(a,b) {
    return a+b;
}

var value = add(1,2);
//uncomment the following to check the examples one by one
/*asserting with strict
assert(value===3,"1 and 2 = 3");
//equivalent to
assert.strictEqual(value,3,"1 and 2 = 3");
*/

/* simple equal asserting 
assert(value == 3,"1 and 2 = 3");
//equivalent to
assert.equal(value,3,"1 and 2 = 3");
*/

/** Asserting Not Equals 
assert(value!==2,"1 + 2 != 3");
//equivalent to 
assert.notEqual(value,2,"1 + 2 != 3");
*/