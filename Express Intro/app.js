var express = require('express');
var app = express();


app.get('/',function (req,res){     //setting up rotes & firing a fn easier than node
    res.send("this is homepage");   //No need to tell the Content-Type , it will detect the type of file
});
app.get('/contact',function (req,res){ 
    res.sendfile(__dirname + "/contact.html");  //res.sendFile() will send the file
});
app.get('/profile/:id',function(req,res){       //Dynamically getting route pages
    res.send("UserID for this profile is " + req.params.id);    //params is parameter for storing id dynamically
});

app.listen(3000);