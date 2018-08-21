//normal Function statement
function sayHi(){
    console.log("hi");
}
sayHi();


//Function Expressions
var callback=function(){
    console.log("fn expression");
}
callback();


//function passing as parameter
function callFunction(fun){
    fun();
}
callFunction(sayHi);