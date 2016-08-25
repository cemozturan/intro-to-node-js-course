var http = require('http');

var options = {
  host: 'www.google.co.uk',
  port: 80,
  path: '/',
  method: 'GET'
};

console.log("Going to make a request...");

// using a URL as the first parameter
var reqWithUrl = http.request('http://www.google.co.uk/', function(response) {
  console.log(response.statusCode);
  response.pipe(process.stdout);
});

// We need to call req.end() to actually invoke the request. This is basically closing the writable stream that we create by making a request.
reqWithUrl.end();

// Using an options object with our own settings
var reqWithOptions = http.request(options, function(response) {
  console.log(response.statusCode);
  response.pipe(process.stdout);
});

// Should give us the same thing as the reqWithUrl above
reqWithOptions.end();

// If we know we are going to do a GET request, we can optimize this by using http.get() and removing .end().
// In a GET scenario, Node know we are not going to upload anything so we don't need to close the request by using req.end().

var reqWithGet = http.get(options, function(response) {
  console.log(response.statusCode);
  response.pipe(process.stdout);
});

/* Previously, we used the third-party module that was called "request" to get the HTML of some website.
One difference between "request" and "http" is that "request" automatically follows redirects, and "http" doesn't.
So, for example
http.request('http://www.google.com/', function(response) {
  console.log(response.statusCode);
  response.pipe(process.stdout);
});

will not give us the HTML, and it will return 302 (or sometimes 301 depending on the redirect) and say that there is a redirect to http:www.google.co.uk/.
"request", however, would give the HTML without even notifying us of a redirect. So "http" works at a lower level.
*/
