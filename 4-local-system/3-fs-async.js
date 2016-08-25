var fs = require('fs');

if (fs.existsSync('temp')) {
  console.log('Directory exists. Removing...');
  if (fs.existsSync('temp/new.txt')) {
    fs.unlinkSync('temp/new.txt');
  }
  fs.rmdirSync('temp');
}

// This does indeed suffer from the christmas tree problem, and we would normally avoid it.
// It is, however, a good example to demonstrate async file access.
fs.mkdir('temp', function(err) {
  fs.exists('temp', function(exists) {
    if (exists) {
      process.chdir('temp');
      fs.writeFile('test.txt', 'This is some test text for the file', function(err) {
        fs.rename('test.txt', 'new.txt', function(err) {
          fs.stat('new.txt', function(err, stats) {
            console.log('File has size: ' + stats.size + ' bytes');
            fs.readFile('new.txt', function(err, data) {
              // We need to call string because the data we have is a buffer, and needs to be converted to a string by using the default encoding.
              console.log('File contents: ' + data.toString());
            });
          });
        });
      });
    }
  });
});
