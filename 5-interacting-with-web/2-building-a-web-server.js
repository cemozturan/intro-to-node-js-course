// Building a web server in Node

var fs = require('fs');
var http = require('http');

http.createServer(function(req, res) {
  // This function gets executed every time a request is received.
  res.writeHead(200, { 'Content-Type' : 'text/plain'});
  if (req.url === '/somefile.txt') {
    // __dirname is a variable that tells us the directory which the current script is running in.
    fs.createReadStream(__dirname + '/somefile.txt').pipe(res);
  } else {
    res.end("Hello world");
  }
}).listen(process.env.PORT, function() {
  // Gets called when the server is up and running
  console.log('Server running!');
});

// I had to do set PORT = 8000 as PORT wasn't in my environment variables.
// listen(8000) says port is 8000, and IP is the default one (127.0.0.1), (we can also call listen(port, IP), giving an explicit IP (e.g., process.env.IP))
// so http://127.0.0.1:8000/ gives us "Hello world" and http://127.0.0.1:8000/somefile.txt gives us the file content
// or use http://localhost:8000
