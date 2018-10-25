var crypto = require('crypto');

function randomValueHex(len) {
    return crypto.randomBytes(Math.ceil(len/2))
                 .toString('hex')
                 .slice(0,len);
};

var value = randomValueHex(12);

console.log(value);