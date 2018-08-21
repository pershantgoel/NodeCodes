var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    console.log("req was made :",req.url);
    res.writeHead(200,{'content-type':'text/html'});   //res.writeHead(status,object) is passed
    var readStream = fs.createReadStream(__dirname + "/index.html",'utf8');

    readStream.pipe(res);
    //res.end('hey ninjas');
});

server.listen(3000,'Localhost');    //listen(portno.,'ip address')
console.log('listening to port 3000');