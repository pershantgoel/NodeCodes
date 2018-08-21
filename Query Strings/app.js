var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var urlencodedParser = bodyParser.urlencoded({extended:false}); //urlencodedParser is now a middleware
app.set('view engine' , 'ejs');

app.get('/',function (req,res){     //setting up rotes & firing a fn easier than node
    res.send("this is homepage");   //No need to tell the Content-Type , it will detect the type of file
});
app.get('/contact',function (req,res){ 
    console.log(req.query);
    res.render('contact' , {qs:req.query});
});

app.post('/contact' ,urlencodedParser , function(req,res){
    console.log(req.body);
    res.render('contact-success' , {data:req.body});
});

app.get('/profile/:name',function(req,res){
    var data = {age:29 , job:'ninjas' , hobbies:['eating', 'fighting' ,'fishing']};
    res.render('profile', {person:req.params.name , data:data});  //ejs will byDefault look into views folder for profile.ejs
});

app.listen(3000);