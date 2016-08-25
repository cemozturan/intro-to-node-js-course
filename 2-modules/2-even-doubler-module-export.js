var maxTime = 1000;

// Function that waits for a random amount time up to 1 second,
// then doubles the input if it is an even number, and errors if it an odd number.
var evenDoubler = function(number, callback){
  var waitTime = Math.floor(Math.random()*(maxTime));
  if (number % 2) {
    setTimeout(() => {
      callback(new Error("Odd input!"));
    }, waitTime);
  } else {
    setTimeout(() => {
      callback(null, number*2, waitTime);
    }, waitTime);
  }
}

var evenDoublerSync = function(number) {
  if (number % 2) {
    throw(new Error("Odd input!"));
  } else {
    return number * 2;
  }
}

module.exports.evenDoubler = evenDoubler;
module.exports.evenDoublerSync = evenDoublerSync;
module.exports.foo = "bar";
