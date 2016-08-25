var buffer = new Buffer('Hello');

console.log(buffer.toString());
console.log(buffer.toString('base64'));

// You can do all this in oneline if you wanted to create a buffer and convert it to a string using a certain encoding
var temp = new Buffer('world').toString('base64');

// Call a certain subsection of a buffer, the first two characters in this case
console.log(buffer.toString('utf-8', 0, 2));
