/*

"request" makes very good use of streams. By passing it a URL, we make it return a stream.
Since streams inherit from EventEmitters, we can use the "on" function to subscrive to some events
that get emitted by the ReadableStream, like "data" and "end". These are pre-defined events within ReadableStream.

*/

var request = require('request');

// stream that we get back is the body of the response to the request.
// In this particular case, it should be the HTML of the pluralsight home page.
var s = request('http://www.pluralsight.com/');

// data event gets emitted whenever new Data has been received
s.on('data', function(chunk){
  console.log(">>>Data>>> " + chunk);
});

// end event gets emitted when there is no more data to be read
s.on('end', function() {
  console.log(">>>Done!>>>");
});
