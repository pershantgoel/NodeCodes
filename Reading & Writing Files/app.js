var fs = require('fs');
//This will read the file Synchronusly ie blocking model
var readMe=fs.readFileSync('readMe.txt','utf8');  //Since in same folder so no path require
console.log(readMe);

//fs.writeFileSync('writeMe.txt',readMe);

//Asynch method(requires callback fn-which fires when process cmpltes) for reading & writing
fs.readFile('readMe.txt','utf8',function(err,data){    //anonymous fn is callback fn
    fs.writeFile('WriteMe.txt',data);
});

//Deleting file Asynch
fs.unlink('writeMe.txt');