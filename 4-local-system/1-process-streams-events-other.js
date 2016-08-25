/* process streams */

// process.stdin is on pause by default, so we have to call resume() to start it
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk) {
  process.stdout.write('DATA! -> ' + chunk);
});

/* For some reason, the below doesn't work on Windows cmd when Ctrl+D or Ctrl+C is pressed. */
process.stdin.on('end', function() {
  process.stderr.write('End!\n');
});

/* process events */

/* SIGINT catches Ctrl+C */
process.on('SIGINT', function() {
  process.stdout.write('\n end \n');
  process.exit();
});

/* This would get executed if you ran the kill -TERM process_id command on Linux */
process.on('SIGTERM', function() {
  process.stderr.write("Why are  you trying to terminate me???");
});

/* process other */

console.log("Node is running as process #" + process.pid);
