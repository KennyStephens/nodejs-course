const http = require('http');

// Called by node.js whenever a request is received
const server = http.createServer((request, response) => {
    console.log(request.url, request.method, request.headers);
    // process.exit();
    response.setHeader('Content-Type', 'text/html');
    response.write('<html>')
    response.write('<head><title>My First Page</title></head>');
    response.write('<body><h1>Hello from my Node.js server</h1></body>');
    response.write('</html>')
    response.end();
});

server.listen(3000);
