var express = require('express');
var todoController = require('./Controllers/controller');
var app = express();
//Setting View Engine
app.set('view engine' , 'ejs');

//Static Files
app.use( express.static(__dirname + '/public')); //assets folder can be used by any route--thats why route isnot mentioned

//Fire Controller
todoController(app);

//Listen to Port
app.listen(3000);
console.log("lsitening to port 3000");