var fs = require('fs');

if (fs.existsSync('temp')) {
  console.log('Directory exists. Removing...');
  if (fs.existsSync('temp/new.txt')) {
    fs.unlinkSync('temp/new.txt');
  }
  fs.rmdirSync('temp');
}

fs.mkdirSync('temp');
if (fs.existsSync('temp')) {
  process.chdir('temp');
  fs.writeFileSync('test.txt', 'This is some test text for the file');
  fs.renameSync('test.txt', 'new.txt');
  console.log('File has size: ' + fs.statSync('new.txt').size + ' bytes');

  // We need to call string because the data we have is a buffer, and needs to be converted to a string by using the default encoding.
  console.log('File contents: ' + fs.readFileSync('new.txt').toString());
}
