let http = require('http');
let express = require('express');

// This instance of express handles the normal processes we 
// would do with the http module of node
let app = express();

// This is to test route handler chaining. 
let routeHandlerOne = (req, res, next) => {
    let handlerOne = 'Passing through handler one';
    next(handlerOne);
};

// Notice that arguments passed through next appear
// BEFORE the normal request handler parameters. 
let routeHandlerTwo = (strFromHandlerOne, req, res, next) => {
    res.end(`${strFromHandlerOne} and responding from handler two.`);
}

app.get('/', routeHandlerOne, routeHandlerTwo);

// Begin listening on localhost:6009.
app.set('port', 6009);
app.listen(app.get('port'));