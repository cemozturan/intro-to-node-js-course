// https://npmjs.org is a great place to look for modules

// We'll install the "request" module, a simplified HTTP request client.

// Once you are in the correct directory, the directory of your project, run the following command to install "request"
// npm install request

var request = require('request');

request('http://www.google.com', function(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
});
