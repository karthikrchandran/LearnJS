var util = require('util')
// arithmetic practice
console.log(10);
console.log(5 + 3 + 4);
console.log(9 - 1);
console.log(6 / 2);

console.log((2 * 4) + (4 - 6));

// variables
var a = 3;

var output_a = util.format("a equals %d", a);
console.log(output_a);

var b = a + 1;
console.log("b equals %d", b);


var big_expression = a + b + (a * b);

console.log("Does a equals b? %s", a == b);


