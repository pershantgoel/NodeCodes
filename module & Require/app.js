var stuff =require('./stuff.js');  // './' shows file in current directory & no need for stuff.js ,will automatically detect js file

console.log(stuff.counter(['shaun','crystal','ryu'])); 
console.log(stuff.adder(20,10));
console.log(stuff.adder(stuff.pi,5));