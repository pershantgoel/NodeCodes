var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    console.log("req was made :",req.url);
    res.writeHead(200,{'content-type':'application/json'});   //res.writeHead(status,object) is passed
    
    var obj = {name:'Ryu' , job:'Ninja' , age:29};
    res.end(JSON.stringify(obj));     //res.end(expects string or buffer)
   
});

server.listen(3000,'Localhost');    //listen(portno.,'ip address')
console.log('listening to port 3000');