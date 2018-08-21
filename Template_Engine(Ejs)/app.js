var express = require('express');
var app = express();
app.set('view engine' , 'ejs');
app.use('/assets' , express.static('assets'));  //To load static files css etc ; it is a Middleware

app.get('/',function (req,res){     //setting up rotes & firing a fn easier than node
    res.send("this is homepage");   //No need to tell the Content-Type , it will detect the type of file
});
app.get('/contact',function (req,res){ 
    res.sendfile(__dirname + "/contact.html");  //res.sendFile() will send the file
});
app.get('/profile/:name',function(req,res){
    var data = {age:29 , job:'ninjas' , hobbies:['eating', 'fighting' ,'fishing']};
    res.render('profile', {person:req.params.name , data:data});  //ejs will byDefault look into views folder for profile.ejs
});

app.listen(3000);