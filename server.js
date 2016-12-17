let http = require('http');

const PORT = 6008;

// Function that will be called when our 
// endpoint is hit. 
let requestHandler = (request, response) => {
    response.end(
        `request properties:
         headers: ${Object.keys(request.headers).map((key) => {return '\t' + key + ':' + request.headers[key] + '\n';})}
         url: ${request.url}
         method: ${request.method}`
    );
}

// Configure the server. 
let server = http.createServer(requestHandler);

// Start the server. 
server.listen(PORT, () => {
    console.log(`Server listening on localhost:${PORT}`);
});