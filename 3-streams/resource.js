var util = require('util');
var EventEmitter = require('events').EventEmitter;

function Resource(m) {

  var maxEvents = m;

  // Because our Resource function inherits from EventEmitter,
  // it is the one that is doing the emitting of events.
  var self = this;

  process.nextTick(function() {
    var count = 0;
    self.emit('start');
    var t = setInterval(function(){
      self.emit('data', ++count, 'test');
      if (count === maxEvents) {
        self.emit('end', count);
        clearInterval(t);
      }
    }, 10);
  });
};

util.inherits(Resource, EventEmitter);

module.exports = Resource;
