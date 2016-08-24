console.log("stdout is writable? " + process.stdout.writable);
console.log("stdin is writable? " + process.stdin.writable);
console.log("stderr is writable? " + process.stderr.writable);

process.stdout.write("Hello");
process.stdout.write("World");

// Throws an error
// process.stdin.write("Hello");

process.stderr.write("Hello");
process.stderr.write("World");
