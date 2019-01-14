const http = require('http');

const routes = require('./routes')

console.log(routes.someText);

// Called by node.js whenever a request is received
const server = http.createServer(routes.handler);

server.listen(3000);
