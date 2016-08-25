var buffer = new Buffer('Hello');

console.log(buffer.toString());
console.log(buffer.toString('base64'));

var temp = new Buffer('world').toString('base64');

console.log(buffer.toString('utf-8', 0, 2));
