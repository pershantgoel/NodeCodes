var http = require('http');
var fs= require('fs');
var readStream = fs.createReadStream(__dirname + "/readMe.txt" ,'utf8');
readStream.on('data',function(chunk){   //Here 'data' is an event jst like window.addEventListener('load',function{})
    console.log("chunk recieved");      //jst like load event data is also an event
    console.log(chunk);
})

//Other method to read a file is fs.readFile which reads the whole data in one go without chunks