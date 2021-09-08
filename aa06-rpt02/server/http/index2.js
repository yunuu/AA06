// http server : index.js

var http = require("http");
port = 3003;

var server = http.createServer((request, response) => {
  response.writeHeader(200, {
    "Content-Type": "text/plain",
  });
  response.write("Hello HTTP server from node.js"); // WEB response
  response.write("\n");
  response.write("My ID is aa06! \n");
  console.log("Connected from Client at" + new Date());
  response.end();
  
});

server.listen(port);
console.log("Server Running on " + port +
 ".\nLaunch http://localhost:" + port);
