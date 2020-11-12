const http = require('http');
const nStatic = require('node-static');

const fileServer = new nStatic.Server('./build');

http.createServer(function create(req, res) {
    fileServer.serve(req, res);
}).listen(5000);
