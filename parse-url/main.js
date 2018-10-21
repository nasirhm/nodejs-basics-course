var url = require('url');

var urlToParse = "http://nasirhussain.me:80";

var parseUrl = url.parse(urlToParse, true,true);

console.log("HREF :",parseUrl.href);
console.log("Protocol :",parseUrl.protocol);
console.log("Hash :", parseUrl.hash);
console.log("Port :", parseUrl.port);