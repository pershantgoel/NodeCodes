var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to database
mongoose.connect('mongodb://test:test123@ds125932.mlab.com:25932/todo');

//Create a Schema - A blueprint of how our objects will look
var todoSchema = new mongoose.Schema({
    item:String
});

var Todo = mongoose.model('Todo',todoSchema);  //Todo will be saved as a collection
// var itemOne = Todo({item:'buy flowers'}).save(function(err){
//     if(err) throw err;
//     console.log('item saved');
// })

//var data = [{item:'get milk'},{item:'walk dog'},{item:'do coding'}];
var urlencodedParser = bodyParser.urlencoded({extended:false});

module.exports = function(app){

    app.get('/todo' , function(req,res){
        //get data from mongodb & pass to it view
        Todo.find({} , function(err,data){   //will find all collections from db if obj is empty
            if(err) throw err;
            res.render('todo',{todos:data});
        }); 
        
    });
    app.post('/todo' ,urlencodedParser, function(req,res){  //Hamdler of AJAX Request
        //get data from view and add it to mongodb
        var newTodo = Todo(req.body).save(function(err,data){
            res.json(data);
        })
        //data.push(req.body);    //js syntax to push in array
       // res.json(data);
    });
    app.delete('/todo/:item' , function(req,res){
        console.log(req.params.item);
        //delete the item from mongodb
        Todo.find({item:req.params.item.replace(/\-/g, " ")}).deleteOne(function(err,data){
            if(err) throw err;
            res.json(data);
        });
    //     data = data.filter(function(todo){
    //         return todo.item.replace(/ /g, '-' )!==req.params.item ;    //returns true or false; true means item remain
    //                                                                 //false means item delete
    //     });
    //     res.json(data);
    // });
});
}