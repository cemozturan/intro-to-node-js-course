/*

Run the tests using mocha 2-mocha.js
mocha --help -> Gives a list of additional commands

*/

var should = require('should');
var fun = require('../2-modules/2-even-doubler-module-export');

// The "describe" are basically our test suites, and they can be nested.
// This is saying I want to write some tests for MathFun and the first
// set of tests is for when I'm using the module syncly.
describe('MathFun', function() {

  describe('when used syncly', function() {

    // And then individual tests come with descriptive names
    it('should double even numbers correctly', function() {

      fun.evenDoublerSync(2).should.equal(4);
    });

    // This test will be skipped and flagged as a pending one.
    it.skip('some test that we want to SKIP', function() {


    });

    // it.only runs only that test, within the whole file.
    // it.only('should double even numbers correctly', function() {
    //
    //   fun.evenDoublerSync(2).should.equal(4);
    // });

    it('should throw on odd numbers', function(done) {

      // done is the way we let Mocha know that this particular test is done.
      // It is even more important when testing async functions.
      // We call the function below and say that it should throw a message with the word 'Odd' in.
      (function() { fun.evenDoublerSync(3) }).should.throw(/Odd/);
      done();
    });
  });

  describe('when used asyncly', function() {

    it('should double even numbers correctly', function(done) {

      fun.evenDoubler(2, function(err, results) {
        should.not.exist(err);
        results.should.equal(4);
        done();
      });
    });

    it('should throw on odd numbers', function(done) {

      fun.evenDoubler(3, function(err, results) {
        should.exist(err);
        should.not.exist(results);
        done();
      });
    });
  });
});
