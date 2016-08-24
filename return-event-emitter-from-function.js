/*

Two common patterns for using EventEmitters in Node:
1) As a return value from a function call (like in the examples above)
2) Objects extend EventEmitters and emit events themselves in addition to providing some other functionality

This demonstrates the first pattern of using an EventEmitter,
returning an EventEmitter from a function.

*/

var EventEmitter = require('events').EventEmitter;

// Takes in a number and returns an instance of an
// EventEmitter that emits 3 events (start, data, end).
var getResource = function(number) {
  var e = new EventEmitter();
  /*
    process.nextTick is similar to setTimeout and setInterval but what it really says is
    on the very next tick of the event loop, I want you to run this function.
  */
  process.nextTick(function() {
    var count = 0;
    e.emit('start');
    var t = setInterval(function(){
      e.emit('data', ++count, 'test');
      if (count === number) {
        e.emit('end', count);
        clearInterval(t);
      }
    }, 10);
  });
  return(e);
};

var r = getResource(5);

r.on('start', function() {
  console.log("I've started!");
});

r.on('data', function(d, someOtherParameterForTestingPurposes) {
  console.log("I've received data: " + d + " " + someOtherParameterForTestingPurposes);
});

r.on('end', function(t) {
  console.log("I'm done, with " + t + " data events.");
});
