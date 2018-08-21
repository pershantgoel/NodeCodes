var http = require('http');
var fs= require('fs');

var server = http.createServer(function(req,res){
    console.log("req was made :",req.url);
    if(req.url==='/home' || req.url==='/'){     //Good practice for === 
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname +"/index.html").pipe(res);
    }
    else if(req.url==='/contact'){
        res.writeHead(200,{'content-type':'text/html'});
        fs.createReadStream(__dirname + "/contact.html").pipe(res);
    }
    else if(req.url==='/api/ninjas'){   //Getting json or something else or json
        var ninjas = [{name:'ryu',age:20},{name:'ken',age:22}];   //Array of objects
        res.writeHead(200,{'content-type':'application/json'});
        res.end(JSON.stringify(ninjas));
    }
    else{
        res.writeHead(404,{'content-type':'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});

server.listen(3000,'Localhost');    //listen(portno.,'ip address')
console.log('listening to port 3000');