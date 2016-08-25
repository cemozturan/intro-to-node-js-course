/*
Assert modeule doesn't give any output if everything passes.
It is for simple testing of outputs, exceptions and whatnot.

If tests fail, then it'll output errors on the console.
*/

var assert = require('assert');
var fun = require('../2-modules/2-even-doubler-module-export');

assert.equal(fun.evenDoublerSync(2), 4);

// Test throwing an exception. The "/Odd/" in the end is regex that we expect the error message to match.
assert.throws(function() {
  fun.evenDoublerSync(3);
}, /Odd/);

fun.evenDoubler(2, function(err, results) {
  assert.ifError(err);
  assert.equal(results, 4, "evenDoubler failed on even number");
});

fun.evenDoubler(3, function(err, results) {
  assert.notEqual(err, null);
});
