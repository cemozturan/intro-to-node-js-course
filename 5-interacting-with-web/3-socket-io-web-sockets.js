var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

var handler = function(req, res) {
  fs.readFile(__dirname + '/index.html', function(err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    } else {
      res.writeHead(200);
      res.end(data);
    }
  });
};

// This example has a web server and a socket.IO server combined.
var app = http.createServer(handler);

// So, socket.io adds itself to the web server we create above
var io = socketio.listen(app);

io.sockets.on('connection', function(socket) {
  setInterval(function() {
    var timestamp = Date.now();
    console.log('Emitted: ' + timestamp);
    socket.emit('timer', timestamp);
  }, 2000);
  socket.on('submit', function(data) {
    console.log('Submitted: ' + data);
  });
});

app.listen(8000, function() {
  console.log("Server running!");
});

// Run the script and go to http://127.0.0.1:8000/
