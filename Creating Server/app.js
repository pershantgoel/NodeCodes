var http = require('http');

var server = http.createServer(function(req,res){
    console.log("req was made :",req.url);
    res.writeHead(200,{'content-type':'text/plain'});   //res.writeHead(status,object) is passed
    res.end('hey ninjas');
});

server.listen(3000,'Localhost');    //listen(portno.,'ip address')
console.log('listening to port 3000');