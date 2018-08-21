var counter = function(arr){
    return 'There are '+ arr.length +' elements in this array';
};

var adder = function(a,b){
    return `The sum is ${a+b}`; //ES6 syntax
};

var pi= 3.14;
module.exports.counter = counter; //we want the counter part to be exported & nothing else
//module.exports exports the object so
module.exports.adder=adder;
module.exports.pi=pi; 

//Other way of exporting
module.exports={
    counter,adder,pi
}

//other way
module.exports={
    counter:counter,
    adder:adder,
    pi:pi
}