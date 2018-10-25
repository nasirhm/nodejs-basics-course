var http = require('http');

var PORT = 8080;

var server = http.createServer(function (req,res) {
    res.writeHead(200,{"content-Type" : "text/html"});
    res.end("<p> <h1>It Works </h1> Hello World!!</p>");
});

server.listen(PORT);

console.log("Listening on Port :" + PORT);