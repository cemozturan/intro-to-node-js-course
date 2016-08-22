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

var callback = (error, results, waitTime) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log(results + " (" + waitTime + " ms)");
  }
}

// The order the loop is executed is different than the order the callbacks are executed,
// because of the random wait.
for (var i = 0; i < 10; i++) {
  console.log("Calling for: " + i);
  evenDoubler(i, callback);
};
