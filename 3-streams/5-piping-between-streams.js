console.log("0");

var request = require('request');

console.log("1");

var stream = request('http://www.pluralsight.com');

console.log("2");

stream.pipe(process.stdout);

console.log("3");

// 0, 1, 2, 3 get printed before the stream content as the stream works asyncly.

// Does exactly the same thing as the code above
request('http://www.pluralsight.com').pipe(process.stdout);

/* ---------------------------------------------------- */

// require file sysytem, so we can write a stream's content into a file
var fs = require('fs');

// require zlib, so we can write a stream's content into a compressed file
var zlib = require('zlib');

// createGzip returns a stream that is both readable and writable
request('http://www.pluralsight.com').pipe(zlib.createGzip()).pipe(fs.createWriteStream('pluralsight.html.gz'));
