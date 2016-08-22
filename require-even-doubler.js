var mathFun = require('./even-doubler-module-export');

var processResults  = (error, results, waitTime) => {
  if (error) {
    console.log("ERROR: " + error.message);
  } else {
    console.log(results + " (" + waitTime + " ms)");
  }
}

// The order the loop is executed is different than the order the callbacks are executed,
// because of the random wait.
for (var i = 0; i < 10; i++) {
  console.log("Calling for: " + i);
  mathFun.evenDoubler(i, processResults);
};

console.log("The 'foo' variable from module 'MathFun': " + mathFun.foo);
console.log("The 'maxTime' variable is not exported: " + mathFun.maxTime);
