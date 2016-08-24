/*

Two common patterns for using EventEmitters in Node:
1) As a return value from a function call (like in the examples above)
2) Objects extend EventEmitters and emit events themselves in addition to providing some other functionality

This demonstrates the second pattern of using an EventEmitter,
where an object extends the EventEmitter class.

*/

var Resource = require('./resource');

var r = new Resource(7);

r.on('start', function() {
  console.log("I've started!");
});

r.on('data', function(d, someOtherParameterForTestingPurposes) {
  console.log("I've received data: " + d + " " + someOtherParameterForTestingPurposes);
});

r.on('end', function(t) {
  console.log("I'm done, with " + t + " data events.");
});
