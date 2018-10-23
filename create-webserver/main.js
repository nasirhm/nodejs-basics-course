var http = require('http');

const PORT = 8080;

function handleRequest(request, response) {

    response.end("NodeJS Server Started : " +request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT,function () {
    console.log("server started on : http://localhost:%s",PORT);
})