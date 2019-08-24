const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
    const readStream = fs.createReadStream('./static/example.json');
    res.writeHead(200, {'Content-type' : 'application/json'});
    readStream.pipe(res);
}).listen('3000');