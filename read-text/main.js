var fs = require('fs');

var content = fs.readFileSync('hello.txt','utf8');
console.log(content);