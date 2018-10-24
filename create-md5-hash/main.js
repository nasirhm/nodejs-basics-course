var dataToHash = "This is Sample Data";

var crypto = require('crypto');

console.log(crypto.createHash('md5').update(dataToHash).digest('hex'));