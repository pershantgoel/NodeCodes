var fs = require('fs');

//Synch Method to make Dir
fs.mkdirSync('stuff');
//Synch Method to remove Dir
fs.rmdirSync('stuff');  //rm is remove dir

//Asynch to make Dir
fs.mkdir('stuff',function(){
    fs.readFile('readMe.txt','utf8',function(err,data){
        fs.writeFile('./stuff/writeMe.txt',data)
    })
}); 

//Asynch to remove dir
//Dir should be empty to make it delete otherwise empty it then delete it
fs.unlink('./stuff/writeMe.txt',function(){     //it will delete file
    fs.rmdir('./stuff');
});   
